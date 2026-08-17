const tabs = document.querySelectorAll('.tab-btn');
const indicator = document.querySelector('.tab-indicator');
const panels = document.querySelectorAll('.tab-panel');

function updateIndicator(activeTab) {
  indicator.style.width = `${activeTab.offsetWidth}px`;
  indicator.style.left = `${activeTab.offsetLeft}px`;
}

function showPanel(targetId) {
  panels.forEach(p => p.classList.toggle('active', p.id === targetId));
}

if (document.querySelector('.tab-btn.active')) {
  updateIndicator(document.querySelector('.tab-btn.active'));
}

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    e.target.classList.add('active');
    e.target.setAttribute('aria-selected', 'true');

    updateIndicator(e.target);

    const targetId = e.target.getAttribute('data-target');
    showPanel(targetId);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('resize', () => {
  const activeTab = document.querySelector('.tab-btn.active');
  if (activeTab) updateIndicator(activeTab);
});