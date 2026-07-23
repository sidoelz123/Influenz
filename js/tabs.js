(function () {
  'use strict';

  function initTabs() {
    var tabContainer = document.querySelector('.expertise-section');
    if (!tabContainer) return;

    var tabButtons = tabContainer.querySelectorAll('.tab-btn');
    var tabPanels = tabContainer.querySelectorAll('.tab-panel');

    if (!tabButtons.length || !tabPanels.length) return;

    function activateTab(tabId) {
      tabButtons.forEach(function (btn) {
        var isActive = btn.getAttribute('data-tab') === tabId;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      tabPanels.forEach(function (panel) {
        var panelId = panel.getAttribute('id');
        var isActive = panelId === 'tab-' + tabId;
        panel.classList.toggle('is-active', isActive);
      });
    }

    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tabId = btn.getAttribute('data-tab');
        if (tabId) activateTab(tabId);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }
})();
