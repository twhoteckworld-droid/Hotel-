window.addEventListener('error', function(e) {
  document.body.innerHTML = '<pre style="color:red;padding:16px;white-space:pre-wrap;font-size:13px">' + (e.message || 'Error') + '\n\n' + (e.error && e.error.stack || '') + '</pre>';
});
window.addEventListener('unhandledrejection', function(e) {
  var r = e.reason;
  document.body.innerHTML = '<pre style="color:red;padding:16px;white-space:pre-wrap;font-size:13px">Promise: ' + (r && r.stack || r) + '</pre>';
});
