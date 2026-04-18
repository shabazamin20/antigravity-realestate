/* ─── Admin Panel JS ─── */

let allProjects = [];
let pendingDeleteId = null;

// ─── Toast ───
function showToast(message, type) {
  type = type || 'success';
  var icons = { success: '✅', error: '❌', info: 'ℹ️' };
  var container = document.getElementById('toastContainer');
  var toast = document.createElement('div');
  toast.className = 'toast-msg ' + type;
  toast.innerHTML = '<span class="toast-icon">' + (icons[type] || icons.info) + '</span><span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(function() {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(2rem)';
    toast.style.transition = 'all .3s';
  }, 3200);
  setTimeout(function() { toast.remove(); }, 3600);
}

// ─── Spinner ───
function showSpinner() {
  var s = document.getElementById('spinner');
  if (s) s.classList.remove('hidden');
}
function hideSpinner() {
  var s = document.getElementById('spinner');
  if (s) s.classList.add('hidden');
}

// ─── Escape HTML ───
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Tab Navigation ───
function showTab(name) {
  var tabs = ['dashboard', 'add-project', 'manage-projects'];
  tabs.forEach(function(t) {
    var el = document.getElementById('tab-' + t);
    if (el) el.style.display = (t === name) ? '' : 'none';
  });

  document.querySelectorAll('.sidebar-nav-item').forEach(function(item) {
    item.classList.remove('active');
    if (item.getAttribute('href') === '#' + name) item.classList.add('active');
  });

  var titles = { dashboard: 'Dashboard', 'add-project': 'Add Project', 'manage-projects': 'Manage Projects' };
  var titleEl = document.getElementById('topbarTitle');
  if (titleEl) titleEl.textContent = titles[name] || 'Admin';

  if (name === 'manage-projects') renderManageTable(allProjects);
  if (name === 'dashboard') renderDashboardTable(allProjects.slice(0, 5));

  if (window.innerWidth < 992) {
    document.getElementById('adminSidebar').classList.remove('open');
  }
}

function toggleSidebar() {
  document.getElementById('adminSidebar').classList.toggle('open');
}

// ─── Load Projects ───
function loadProjects() {
  showSpinner();
  fetch('/api/projects')
    .then(function(res) {
      if (!res.ok) throw new Error('Failed to load');
      return res.json();
    })
    .then(function(data) {
      allProjects = data;
      updateStats(data);
      renderDashboardTable(data.slice(0, 5));
    })
    .catch(function() {
      showToast('Failed to load projects.', 'error');
    })
    .finally(function() {
      hideSpinner();
    });
}

// ─── Stats ───
function updateStats(projects) {
  setText('statTotal',      projects.length);
  setText('statOngoing',    projects.filter(function(p) { return p.status === 'Ongoing'; }).length);
  setText('statCompleted',  projects.filter(function(p) { return p.status === 'Completed'; }).length);
  setText('statWithImages', projects.filter(function(p) { return p.imageUrl; }).length);
}

function setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ─── Image cell helper ───
function imgCell(p) {
  if (p.imageUrl) {
    return '<img src="' + esc(p.imageUrl) + '" class="table-img" alt="' + esc(p.name) + '"/>';
  }
  return '<div class="table-img-placeholder">🏢</div>';
}

// ─── Dashboard Table ───
function renderDashboardTable(projects) {
  var tbody = document.getElementById('dashboardTableBody');
  if (!tbody) return;
  if (!projects.length) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4" style="color:var(--zinc-400);">No projects yet. <a href="#" onclick="showTab(\'add-project\');return false;" style="color:var(--orange);">Add one →</a></td></tr>';
    return;
  }
  tbody.innerHTML = projects.map(function(p) {
    return '<tr>' +
      '<td>' + imgCell(p) + '</td>' +
      '<td><span class="project-name-cell">' + esc(p.name) + '</span></td>' +
      '<td style="color:var(--zinc-500);">' + esc(p.location) + '</td>' +
      '<td><span class="status-badge ' + (p.status === 'Ongoing' ? 'status-ongoing' : 'status-completed') + '" style="position:static;display:inline-block;">' + esc(p.status) + '</span></td>' +
      '<td><button class="btn-delete" onclick="confirmDelete(' + p.id + ')" title="Delete">🗑</button></td>' +
      '</tr>';
  }).join('');
}

// ─── Manage Table ───
function renderManageTable(projects) {
  var tbody  = document.getElementById('manageTableBody');
  var footer = document.getElementById('tableFooter');
  if (!tbody) return;

  if (!projects.length) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center py-5" style="color:var(--zinc-400);">No projects found.</td></tr>';
    if (footer) footer.textContent = '';
    return;
  }

  tbody.innerHTML = projects.map(function(p) {
    return '<tr>' +
      '<td style="color:var(--zinc-400);font-size:.78rem;">#' + p.id + '</td>' +
      '<td>' + imgCell(p) + '</td>' +
      '<td><span class="project-name-cell">' + esc(p.name) + '</span></td>' +
      '<td style="color:var(--zinc-500);">' + esc(p.location) + '</td>' +
      '<td><span class="status-badge ' + (p.status === 'Ongoing' ? 'status-ongoing' : 'status-completed') + '" style="position:static;display:inline-block;">' + esc(p.status) + '</span></td>' +
      '<td style="color:var(--zinc-500);max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + esc(p.description || '—') + '</td>' +
      '<td><button class="btn-delete" onclick="confirmDelete(' + p.id + ')" title="Delete Project">🗑</button></td>' +
      '</tr>';
  }).join('');

  if (footer) footer.textContent = 'Showing ' + projects.length + ' of ' + allProjects.length + ' projects';
}

// ─── Search ───
var searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    var q = searchInput.value.toLowerCase().trim();
    var filtered = q
      ? allProjects.filter(function(p) {
          return p.name.toLowerCase().indexOf(q) > -1 ||
                 p.location.toLowerCase().indexOf(q) > -1 ||
                 (p.description || '').toLowerCase().indexOf(q) > -1;
        })
      : allProjects;
    renderManageTable(filtered);
  });
}

// ─── File Upload ───
var uploadZone = document.getElementById('uploadZone');
var imageFile  = document.getElementById('imageFile');

if (uploadZone) {
  uploadZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });
  uploadZone.addEventListener('dragleave', function() {
    uploadZone.classList.remove('dragover');
  });
  uploadZone.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    var file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  });
}

if (imageFile) {
  imageFile.addEventListener('change', function() {
    if (imageFile.files[0]) handleFileSelect(imageFile.files[0]);
  });
}

function handleFileSelect(file) {
  if (!file.type.startsWith('image/')) {
    showToast('Please select an image file.', 'error');
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var preview = document.getElementById('uploadPreview');
    var img     = document.getElementById('previewImg');
    if (preview && img) {
      img.src = e.target.result;
      preview.style.display = 'block';
    }
  };
  reader.readAsDataURL(file);
  uploadImageToServer(file);
}

function uploadImageToServer(file) {
  var formData = new FormData();
  formData.append('file', file);
  showSpinner();
  fetch('/api/projects/upload', { method: 'POST', body: formData })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.error) throw new Error(data.error);
      document.getElementById('projImageUrl').value = data.imageUrl;
      showToast('Image uploaded successfully!', 'success');
    })
    .catch(function(err) {
      showToast(err.message || 'Image upload failed.', 'error');
    })
    .finally(function() { hideSpinner(); });
}

// ─── Add Project Form ───
var form = document.getElementById('addProjectForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name     = document.getElementById('projName').value.trim();
    var location = document.getElementById('projLocation').value.trim();

    document.getElementById('projName').classList.remove('is-invalid');
    document.getElementById('projLocation').classList.remove('is-invalid');

    var valid = true;
    if (!name)     { document.getElementById('projName').classList.add('is-invalid');     valid = false; }
    if (!location) { document.getElementById('projLocation').classList.add('is-invalid'); valid = false; }
    if (!valid) return;

    var payload = {
      name:        name,
      description: document.getElementById('projDesc').value.trim(),
      location:    location,
      status:      document.getElementById('projStatus').value,
      imageUrl:    document.getElementById('projImageUrl').value || null
    };

    showSpinner();
    fetch('/api/projects', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.error) throw new Error(data.error);
      allProjects.unshift(data);
      updateStats(allProjects);
      showToast('Project "' + data.name + '" added successfully!', 'success');
      form.reset();
      document.getElementById('projImageUrl').value = '';
      var preview = document.getElementById('uploadPreview');
      if (preview) preview.style.display = 'none';
      setTimeout(function() { showTab('manage-projects'); }, 800);
    })
    .catch(function(err) {
      showToast(err.message || 'Failed to add project.', 'error');
    })
    .finally(function() { hideSpinner(); });
  });

  ['projName', 'projLocation'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', function() { el.classList.remove('is-invalid'); });
  });
}

// ─── Delete ───
function confirmDelete(id) {
  pendingDeleteId = id;
  document.getElementById('confirmModal').classList.add('show');
}

function closeConfirm() {
  document.getElementById('confirmModal').classList.remove('show');
  pendingDeleteId = null;
}

document.getElementById('cancelDeleteBtn').addEventListener('click', closeConfirm);

document.getElementById('confirmModal').addEventListener('click', function(e) {
  if (e.target === this) closeConfirm();
});

document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
  if (!pendingDeleteId) return;
  var idToDelete = pendingDeleteId;
  closeConfirm();
  showSpinner();

  fetch('/api/projects/' + idToDelete, { method: 'DELETE' })
    .then(function(res) {
      if (!res.ok) throw new Error('Delete failed with status ' + res.status);
      return res.json();
    })
    .then(function() {
      allProjects = allProjects.filter(function(p) { return p.id !== idToDelete; });
      updateStats(allProjects);
      renderDashboardTable(allProjects.slice(0, 5));
      renderManageTable(allProjects);
      showToast('Project deleted successfully.', 'success');
    })
    .catch(function(err) {
      showToast(err.message || 'Failed to delete project.', 'error');
    })
    .finally(function() { hideSpinner(); });
});

// ─── Re-apply translations on language switch ───
document.addEventListener('langChanged', function () {
  I18N.apply();
  renderDashboardTable(allProjects.slice(0, 5));
  renderManageTable(allProjects);
  var map = { dashboard: 'a_dashboard', 'add-project': 'a_add', 'manage-projects': 'a_manage' };
  var active = document.querySelector('.sidebar-nav-item.active');
  if (active) {
    var key = (active.getAttribute('href') || '').replace('#', '');
    if (map[key]) setText('topbarTitle', I18N.t(map[key]));
  }
});

// ─── Init ───
I18N.apply();
loadProjects();
showTab('dashboard');
