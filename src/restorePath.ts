// Restore deep links redirected through GitHub Pages' 404.html fallback.
const savedPath = sessionStorage.getItem('ghspa-path')
if (savedPath) {
  sessionStorage.removeItem('ghspa-path')
  if (savedPath !== '/') window.history.replaceState(null, '', savedPath)
}
