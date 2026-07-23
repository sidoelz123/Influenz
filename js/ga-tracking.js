(function () {
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-ga]");
    if (el) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "red_box_click",
        ga_action: el.getAttribute("data-ga"),
        ga_label: el.textContent.trim(),
      });
    }
  });
})();
