(function(){
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
      // Dynamically load nav.js after header is injected
      var script = document.createElement('script');
      script.src = root + 'nav.js';
      script.defer = true;
      document.body.appendChild(script);
    });
})();
