// Open all external links in a new tab.
document.querySelectorAll('a[href^="http"]').forEach(function (a) {
  if (a.hostname !== location.hostname) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  }
});

// Simple lightbox for photography.
(function () {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  var lbImg = lb.querySelector('img');
  document.querySelectorAll('.shot[data-full]').forEach(function (el) {
    el.addEventListener('click', function () {
      lbImg.src = el.getAttribute('data-full');
      lb.classList.add('open');
    });
  });
  lb.addEventListener('click', function () { lb.classList.remove('open'); lbImg.src = ''; });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { lb.classList.remove('open'); lbImg.src = ''; }
  });
})();

// Photography category filter.
(function () {
  var bar = document.querySelector('.filterbar');
  if (!bar) return;
  bar.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var cat = btn.getAttribute('data-cat');
    bar.querySelectorAll('button').forEach(function (b) { b.classList.toggle('active', b === btn); });
    document.querySelectorAll('.gallery figure').forEach(function (fig) {
      fig.style.display = (cat === 'all' || fig.getAttribute('data-cat') === cat) ? '' : 'none';
    });
  });
})();
