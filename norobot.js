(function() {
  // head に robots meta がなければ追加
  if (!document.querySelector('meta[name="robots"]')) {
    const m = document.createElement('meta');
    m.name = 'robots';
    m.content = 'noindex,nofollow';
    document.head.appendChild(m);
  }
})();
