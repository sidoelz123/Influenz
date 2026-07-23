(function () {
  'use strict';

  var SQUIGGLE_TEXT = '\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC';
  var SQUIGGLE_TEXT_LONG = '\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC\u02DC';

  function getSquiggleText(element) {
    var text = element.textContent || '';
    var target = element.getAttribute('data-squiggle-target');
    var position = element.getAttribute('data-squiggle-position') || 'top';

    if (!target) return;

    var regex = new RegExp('(\\b)' + target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\b)', 'i');

    if (!regex.test(text)) return;

    var squiggle = target.length <= 4 ? SQUIGGLE_TEXT : SQUIGGLE_TEXT_LONG;

    var replacement = '<span class="squiggle-word squiggle-word--' + position + '">$&<span class="squiggle-mark">' + squiggle + '</span></span>';

    element.innerHTML = text.replace(regex, replacement);
  }

  function initSquiggle() {
    var headings = document.querySelectorAll('.js-squiggle-heading');
    headings.forEach(getSquiggleText);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSquiggle);
  } else {
    initSquiggle();
  }
})();
