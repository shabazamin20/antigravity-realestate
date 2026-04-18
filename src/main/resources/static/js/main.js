/* ─── Public Site JS ─── */

var allProjects = [];
var activeFilter = 'all';

function showToast(message, type) {
  type = type || 'success';
  var icons = { success: '✅', error: '❌', info: 'ℹ️' };
  var container = document.getElementById('toastContainer');
  var toast = document.createElement('div');
  toast.className = 'toast-msg ' + type;
  toast.innerHTML = '<span class="toast-icon">' + icons[type] + '</span><span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(function () { toast.style.opacity = '0'; toast.style.transform = 'translateX(2rem)'; toast.style.transition = 'all .3s'; }, 3200);
  setTimeout(function () { toast.remove(); }, 3600);
}

function hideSpinner() {
  var s = document.getElementById('spinner');
  if (s) { s.classList.add('hidden'); setTimeout(function () { s.remove(); }, 400); }
}

function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function t(key) { return window.I18N ? window.I18N.t(key) : key; }

/* ─── Load ─── */
function loadProjects() {
  fetch('/api/projects')
    .then(function (res) { if (!res.ok) throw new Error(); return res.json(); })
    .then(function (data) {
      allProjects = data;
      updateStats();
      renderProjects(activeFilter);
    })
    .catch(function () { showToast('Failed to load projects.', 'error'); renderEmpty(); })
    .finally(function () { hideSpinner(); });
}

/* ─── Stats ─── */
function updateStats() {
  animateCount('totalProjects',  allProjects.length);
  animateCount('ongoingCount',   allProjects.filter(function (p) { return p.status === 'Ongoing'; }).length);
  animateCount('completedCount', allProjects.filter(function (p) { return p.status === 'Completed'; }).length);
}

function animateCount(id, target) {
  var el = document.getElementById(id);
  if (!el) return;
  var current = 0, step = Math.max(1, Math.ceil(target / 30));
  var timer = setInterval(function () {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}

/* ─── Render Cards ─── */
function renderProjects(filter) {
  activeFilter = filter || 'all';
  var grid = document.getElementById('projectsGrid');
  var isAr = window.I18N && window.I18N.getLang() === 'ar';
  var list = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(function (p) { return p.status === activeFilter; });

  if (!list.length) { renderEmpty(); return; }

  grid.innerHTML = list.map(function (p, i) {
    var delay       = (i % 6) * 60;
    var isOngoing   = p.status === 'Ongoing';
    var statusLabel = t(isOngoing ? 'status_ongoing' : 'status_completed');
    var displayName = isAr && p.nameAr       ? p.nameAr       : p.name;
    var displayDesc = isAr && p.descriptionAr ? p.descriptionAr : (p.description || '');
    var displayLoc  = isAr && p.locationAr   ? p.locationAr   : p.location;

    return '<a href="/project.html?id=' + p.id + '" class="project-card" style="animation:fadeInUp .45s ' + delay + 'ms ease both;text-decoration:none;">' +
      '<div class="project-card-img">' +
        (p.imageUrl ? '<img src="' + esc(p.imageUrl) + '" alt="' + esc(displayName) + '" loading="lazy"/>' : '<div class="img-placeholder">🏢</div>') +
        '<span class="status-badge ' + (isOngoing ? 'status-ongoing' : 'status-completed') + '">' + statusLabel + '</span>' +
      '</div>' +
      '<div class="project-card-body">' +
        '<div class="project-card-location">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
          esc(displayLoc) +
        '</div>' +
        '<div class="project-card-name">' + esc(displayName) + '</div>' +
        '<p class="project-card-desc">' + esc(displayDesc) + '</p>' +
        '<div class="project-card-footer">' +
          '<span style="font-size:.78rem;color:var(--zinc-400);">' + t('card_id') + p.id + '</span>' +
          '<span class="project-card-link">' +
            t('card_view') +
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
          '</span>' +
        '</div>' +
      '</div>' +
    '</a>';
  }).join('');
}

function renderEmpty() {
  document.getElementById('projectsGrid').innerHTML =
    '<div class="empty-state">' +
      '<div class="empty-state-icon">🏗️</div>' +
      '<h3>' + t('empty_title') + '</h3>' +
      '<p>' + t('empty_sub') + '</p>' +
    '</div>';
}

/* ─── Filter Tabs ─── */
document.querySelectorAll('.filter-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

/* ─── Re-render on language change ─── */
document.addEventListener('langChanged', function () {
  I18N.apply();
  if (allProjects.length) renderProjects(activeFilter);
});

/* ─── Animation keyframe ─── */
var style = document.createElement('style');
style.textContent = '@keyframes fadeInUp{from{opacity:0;transform:translateY(1.5rem)}to{opacity:1;transform:none}}';
document.head.appendChild(style);

/* ─── Init ─── */
I18N.apply();
loadProjects();
