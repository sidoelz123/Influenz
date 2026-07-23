(function () {
  var toggle = document.getElementById("js-menu-toggle");
  var grid = document.querySelector(".hero-menu-grid");
  if (toggle && grid) {
    toggle.addEventListener("click", function () {
      grid.classList.toggle("is-open");
      toggle.textContent = grid.classList.contains("is-open") ? "Close" : "MENU";
    });
  }

  var footerToggle = document.getElementById("js-footer-menu-toggle");
  var headerGrid = document.querySelector(".hero-menu-grid");
  var headerToggle = document.getElementById("js-menu-toggle");
  if (footerToggle && headerGrid) {
    footerToggle.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(function () {
        headerGrid.classList.toggle("is-open");
        var isOpen = headerGrid.classList.contains("is-open");
        footerToggle.textContent = isOpen ? "Close" : "MENU";
        if (headerToggle) headerToggle.textContent = isOpen ? "Close" : "MENU";
      }, 400);
    });
  }
})();
