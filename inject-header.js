// Injects the shared header into the page. Place <div id="showza-header"></div> in your HTML.
(function(){
  // Detect root path for assets/links
  function getRoot() {
    var path = window.location.pathname;
    if(path.endsWith('/')) path += 'index.html';
    var depth = path.split('/').length - 2; // -2: remove leading slash and filename
    return depth > 0 ? '../'.repeat(depth) : '';
  }
  fetch(getRoot()+'header.html')
    .then(r=>r.text())
    .then(html=>{
      var root = getRoot();
      html = html.replace(/{ROOT}/g, root);
      document.getElementById('showza-header').outerHTML = html;
    });
})();
