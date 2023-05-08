window.addEventListener("DOMContentLoaded", function () {
  function includeHTML(container) {
    var allElements = document.querySelectorAll("[data-include-path]");
    Array.prototype.forEach.call(allElements, function (el) {
      var includePath = el.dataset.includePath;
      if (includePath) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var doc = new DOMParser().parseFromString(
              this.responseText,
              "text/html"
            );
            var fragment = new DocumentFragment();
            var scripts = Array.from(doc.querySelectorAll("script"));
            doc.body.childNodes.forEach(function (node) {
              includeHTML(node);
              fragment.insertBefore(node, null);
            });
            el.parentElement.insertBefore(fragment, el);
            el.parentElement.removeChild(el);
            scripts
              .filter(function (node) {
                return (
                  node.type.toLowerCase() == "text/javascript" ||
                  node.type.toLowerCase() == "application/javascript"
                );
              })
              .forEach(function (node) {
                if (node.defer) {
                  setTimeout(node.textContent, 0);
                } else {
                  eval(node.textContent);
                }
              });
          }
        };
        xhttp.open("GET", includePath, true);
        xhttp.send();
      }
    });
  }

  includeHTML(document);
});
