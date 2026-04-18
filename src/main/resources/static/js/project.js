/* ─── Project Detail Page JS ─── */

var _project     = null;
var _allProjects = [];

function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function t(key) { return window.I18N ? window.I18N.t(key) : key; }

function showToast(message, type) {
  type = type || 'info';
  var icons = { success:'✅', error:'❌', info:'ℹ️' };
  var container = document.getElementById('toastContainer');
  var toast = document.createElement('div');
  toast.className = 'toast-msg ' + type;
  toast.innerHTML = '<span class="toast-icon">' + icons[type] + '</span><span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(function(){ toast.style.opacity='0'; toast.style.transition='all .3s'; }, 3200);
  setTimeout(function(){ toast.remove(); }, 3600);
}

function hideSpinner() {
  var s = document.getElementById('spinner');
  if (s) s.classList.add('hidden');
}

/* ─── Not Found ─── */
function renderNotFound() {
  document.getElementById('pageContent').innerHTML =
    '<div class="not-found-state">' +
      '<div class="icon">🏗️</div>' +
      '<h2 style="font-size:1.5rem;font-weight:800;color:var(--zinc-900);margin-bottom:.5rem;">' + t('d_not_found') + '</h2>' +
      '<p style="color:var(--zinc-500);margin-bottom:2rem;">' + t('d_not_found_sub') + '</p>' +
      '<a href="/" class="btn-hero-primary" style="display:inline-flex;align-items:center;gap:.5rem;">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>' +
        t('d_go_home') +
      '</a>' +
    '</div>';
}

/* ─── Render Full Page ─── */
function renderProject(project, allProjects) {
  var isAr        = window.I18N && window.I18N.getLang() === 'ar';
  var displayName = isAr && project.nameAr        ? project.nameAr        : project.name;
  var displayDesc = isAr && project.descriptionAr ? project.descriptionAr : (project.description || '');
  var displayLoc  = isAr && project.locationAr    ? project.locationAr    : project.location;

  document.title = esc(displayName) + ' — Antigravity Real Estate';

  var isOngoing   = project.status === 'Ongoing';
  var statusClass = isOngoing ? 'status-ongoing' : 'status-completed';
  var statusLabel = t(isOngoing ? 'status_ongoing' : 'status_completed');

  var imgHtml = project.imageUrl
    ? '<img src="' + esc(project.imageUrl) + '" alt="' + esc(displayName) + '"/>'
    : '<div class="project-hero-placeholder">🏢</div>';

  var highlights = ['h1','h2','h3','h4','h5','h6'];

  var related = allProjects.filter(function(p){ return p.id !== project.id; }).slice(0, 3);

  var relatedHtml = '';
  if (related.length) {
    relatedHtml =
      '<section class="section section-alt">' +
        '<div class="container">' +
          '<span class="section-eyebrow" data-i18n="d_more_eyebrow">' + t('d_more_eyebrow') + '</span>' +
          '<h2 class="section-title mb-4" data-i18n="d_more_title">' + t('d_more_title') + '</h2>' +
          '<div class="row g-4">' +
          related.map(function(p) {
            var rIsAr  = window.I18N && window.I18N.getLang() === 'ar';
            var rName  = rIsAr && p.nameAr     ? p.nameAr     : p.name;
            var rLoc   = rIsAr && p.locationAr ? p.locationAr : p.location;
            var rImg = p.imageUrl
              ? '<img src="' + esc(p.imageUrl) + '" alt="' + esc(rName) + '"/>'
              : '<div style="width:100%;height:160px;background:var(--zinc-100);display:flex;align-items:center;justify-content:center;font-size:2.5rem;">🏢</div>';
            var rStatus  = p.status === 'Ongoing' ? 'status-ongoing' : 'status-completed';
            var rLabel   = t(p.status === 'Ongoing' ? 'status_ongoing' : 'status_completed');
            return '<div class="col-md-4">' +
              '<a href="/project.html?id=' + p.id + '" class="related-card">' +
                rImg +
                '<div class="related-card-body">' +
                  '<span class="status-badge ' + rStatus + '" style="position:static;display:inline-block;margin-bottom:.5rem;">' + rLabel + '</span>' +
                  '<div class="related-card-name">' + esc(rName) + '</div>' +
                  '<div class="related-card-loc">📍 ' + esc(rLoc) + '</div>' +
                '</div>' +
              '</a>' +
            '</div>';
          }).join('') +
          '</div>' +
        '</div>' +
      '</section>';
  }

  var html =
    /* Breadcrumb */
    '<div style="background:var(--zinc-50);border-bottom:1px solid var(--zinc-200);padding:.85rem 0;">' +
      '<div class="container">' +
        '<nav aria-label="breadcrumb">' +
          '<ol class="breadcrumb mb-0" style="font-size:.82rem;">' +
            '<li class="breadcrumb-item"><a href="/" data-i18n="d_home">' + t('d_home') + '</a></li>' +
            '<li class="breadcrumb-item"><a href="/#projects" data-i18n="d_projects">' + t('d_projects') + '</a></li>' +
            '<li class="breadcrumb-item active">' + esc(displayName) + '</li>' +
          '</ol>' +
        '</nav>' +
      '</div>' +
    '</div>' +

    /* Hero Image */
    '<div class="project-hero">' +
      imgHtml +
      '<div class="project-hero-overlay"></div>' +
      '<div class="project-hero-content">' +
        '<span class="status-badge ' + statusClass + '" style="position:static;display:inline-block;margin-bottom:.75rem;">' + statusLabel + '</span>' +
        '<h1 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:800;color:#fff;letter-spacing:-.02em;margin-bottom:.5rem;line-height:1.1;">' + esc(displayName) + '</h1>' +
        '<div style="display:flex;align-items:center;gap:.4rem;color:rgba(255,255,255,.75);font-size:.95rem;">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
          esc(displayLoc) +
        '</div>' +
      '</div>' +
    '</div>' +

    /* Main */
    '<section class="section">' +
      '<div class="container">' +
        '<div class="row g-5">' +

          /* Left */
          '<div class="col-lg-8">' +
            /* Home button */
            '<div class="mb-4">' +
              '<a href="/" data-i18n="d_back" style="display:inline-flex;align-items:center;gap:.5rem;font-size:.85rem;font-weight:600;color:var(--zinc-600);padding:.5rem 1rem;border:1.5px solid var(--zinc-200);border-radius:var(--radius-sm);transition:all .2s;text-decoration:none;" ' +
                'onmouseover="this.style.borderColor=\'var(--orange)\';this.style.color=\'var(--orange)\'" ' +
                'onmouseout="this.style.borderColor=\'var(--zinc-200)\';this.style.color=\'var(--zinc-600)\'">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' +
                t('d_back') +
              '</a>' +
            '</div>' +

            /* About */
            '<div class="project-detail-card">' +
              '<h2 style="font-size:1.2rem;font-weight:700;color:var(--zinc-900);margin-bottom:1.25rem;display:flex;align-items:center;gap:.5rem;">' +
                '<span style="width:3px;height:1.2em;background:var(--orange);border-radius:2px;display:inline-block;"></span>' +
                '<span data-i18n="d_about">' + t('d_about') + '</span>' +
              '</h2>' +
              '<p style="font-size:1rem;color:var(--zinc-600);line-height:1.85;">' + esc(displayDesc) + '</p>' +
            '</div>' +

            /* Highlights */
            '<div class="project-detail-card mt-4">' +
              '<h2 style="font-size:1.2rem;font-weight:700;color:var(--zinc-900);margin-bottom:1.25rem;display:flex;align-items:center;gap:.5rem;">' +
                '<span style="width:3px;height:1.2em;background:var(--orange);border-radius:2px;display:inline-block;"></span>' +
                '<span data-i18n="d_highlights">' + t('d_highlights') + '</span>' +
              '</h2>' +
              '<div class="row g-3">' +
                highlights.map(function(k) {
                  return '<div class="col-sm-6">' +
                    '<div style="display:flex;align-items:center;gap:.6rem;font-size:.875rem;color:var(--zinc-700);">' +
                      '<div style="width:1.5rem;height:1.5rem;background:var(--orange-light);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' +
                        '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' +
                      '</div>' +
                      '<span data-i18n="' + k + '">' + t(k) + '</span>' +
                    '</div>' +
                  '</div>';
                }).join('') +
              '</div>' +
            '</div>' +
          '</div>' +

          /* Right */
          '<div class="col-lg-4">' +
            '<div class="project-detail-card" style="position:sticky;top:calc(var(--navbar-height) + 1.5rem);">' +
              '<h3 style="font-size:1rem;font-weight:700;color:var(--zinc-900);margin-bottom:1.25rem;" data-i18n="d_info">' + t('d_info') + '</h3>' +

              '<div class="detail-row">' +
                '<div class="detail-icon">📋</div>' +
                '<div><div class="detail-label" data-i18n="d_id">' + t('d_id') + '</div><div class="detail-value">#' + project.id + '</div></div>' +
              '</div>' +
              '<div class="detail-row">' +
                '<div class="detail-icon">📍</div>' +
                '<div><div class="detail-label" data-i18n="d_location">' + t('d_location') + '</div><div class="detail-value">' + esc(displayLoc) + '</div></div>' +
              '</div>' +
              '<div class="detail-row">' +
                '<div class="detail-icon">' + (isOngoing ? '🔨' : '✅') + '</div>' +
                '<div><div class="detail-label" data-i18n="d_status">' + t('d_status') + '</div>' +
                  '<div><span class="status-badge ' + statusClass + '" style="position:static;display:inline-block;margin-top:.15rem;">' + statusLabel + '</span></div>' +
                '</div>' +
              '</div>' +
              '<div class="detail-row">' +
                '<div class="detail-icon">🏢</div>' +
                '<div><div class="detail-label" data-i18n="d_developer">' + t('d_developer') + '</div><div class="detail-value" data-i18n="d_dev_name">' + t('d_dev_name') + '</div></div>' +
              '</div>' +

              '<div style="margin-top:1.5rem;">' +
                '<a href="/#contact" class="btn-cta" style="width:100%;text-align:center;display:block;" data-i18n="d_enquire">' + t('d_enquire') + '</a>' +
              '</div>' +
              '<p style="text-align:center;font-size:.75rem;color:var(--zinc-400);margin-top:.85rem;" data-i18n="d_free">' + t('d_free') + '</p>' +
            '</div>' +
          '</div>' +

        '</div>' +
      '</div>' +
    '</section>' +
    relatedHtml;

  document.getElementById('pageContent').innerHTML = html;

  /* Apply translations to any data-i18n inside newly rendered HTML */
  I18N.apply();
}

/* ─── Init + Language Change ─── */
(function () {
  var params = new URLSearchParams(window.location.search);
  var id     = params.get('id');

  if (!id) { hideSpinner(); I18N.apply(); renderNotFound(); return; }

  Promise.all([
    fetch('/api/projects/' + id).then(function(r){ if(!r.ok) throw new Error(); return r.json(); }),
    fetch('/api/projects').then(function(r){ return r.json(); })
  ])
  .then(function(results) {
    _project     = results[0];
    _allProjects = results[1];
    I18N.apply();
    renderProject(_project, _allProjects);
  })
  .catch(function() {
    showToast('Could not load project.', 'error');
    I18N.apply();
    renderNotFound();
  })
  .finally(function(){ hideSpinner(); });
})();

/* Re-render when language switches */
document.addEventListener('langChanged', function() {
  if (_project) {
    renderProject(_project, _allProjects);
  } else {
    I18N.apply();
    renderNotFound();
  }
});
