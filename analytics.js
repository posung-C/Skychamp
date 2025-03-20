(function() {
  const analyticsUrl = 'https://www.dyeng.com.tw/analytics';

  const pageStartTime = Date.now();

  function sendAnalytics(data) {
    fetch(analyticsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(err => console.error('Error sending analytics data:', err));
  }

  function getPageType() {
    return window.location.pathname.startsWith('/3') ? 'sub' : 'main';
  }

  document.addEventListener('DOMContentLoaded', function() {

    sendAnalytics({
      event: 'page_view',
      page: getPageType(),
      timestamp: new Date().toISOString()
    });

    const ctaElements = document.querySelectorAll('.cta-button');
    ctaElements.forEach(function(el) {
      el.addEventListener('click', function() {
        sendAnalytics({
          event: 'cta_click',
          page: getPageType(),
          timestamp: new Date().toISOString()
        });
      });
    });
  });

  window.addEventListener('beforeunload', function() {
    const dwellTime = Date.now() - pageStartTime; // 停留時間 (毫秒)
    navigator.sendBeacon(analyticsUrl, JSON.stringify({
      event: 'page_leave',
      page: getPageType(),
      dwellTime: dwellTime,
      timestamp: new Date().toISOString()
    }));
  });
})();
