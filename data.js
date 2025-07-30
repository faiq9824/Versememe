document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.tier-header').forEach(header => {
    const arrow = header.querySelector('.arrow');
    const targetId = header.getAttribute('data-bs-target');
    const target = document.querySelector(targetId);
    const collapseInstance = bootstrap.Collapse.getOrCreateInstance(target, { toggle: false });

    // Awal panah
    arrow.textContent = target.classList.contains('show') ? '▲' : '▼';

    // Pas header diklik
    header.addEventListener('click', function () {
      if (target.classList.contains('show')) {
        collapseInstance.hide();
        arrow.textContent = '▼';
      } else {
        collapseInstance.show();
        arrow.textContent = '▲';
      }
    });
  });
});