!(function () {
  "use strict";
  var e = document.querySelector(".js-toggle"),
    t = document.querySelector(".js-details"),
    o = t && t.querySelectorAll("a"),
    n = function () {
      e.removeEventListener("click", i, !1),
        setTimeout(function () {
          e.parentNode.removeChild(e);
        }, 100),
        t.classList.remove("is-invisible"),
        t.removeEventListener("focus", n, !1),
        [].forEach.call(o, function (e) {
          e.setAttribute("tabindex", 0);
        });
    },
    i = function () {
      t.focus();
    };
  t &&
    e &&
    (t.setAttribute("tabindex", -1),
    [].forEach.call(o, function (e) {
      e.setAttribute("tabindex", -1);
    }),
    e.addEventListener("click", i, !1),
    t.addEventListener("focus", n, !1));
})(),
  (function () {
    if (-1 !== window.location.host.search(/unic.github.io/)) {
      WebFontConfig = { google: { families: ["Open+Sans:400,700", "Merriweather"] } };
      var e = document.createElement("script"),
        t = document.getElementsByTagName("script")[0];
      (e.src =
        ("https:" == document.location.protocol ? "https" : "http") +
        "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"),
        (e.type = "text/javascript"),
        (e.async = "true"),
        t.parentNode.insertBefore(e, t);
    }
  })();
