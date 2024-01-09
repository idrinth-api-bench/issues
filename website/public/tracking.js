if (window.location.host === 'idrinth-api-ben.ch') {
  const FIRST = 0;
  const d = document;
  const s = d.getElementsByTagName('head',)[FIRST];
  const u = 'https://tracking.bjoern-buettner.me/';
  const make = (file,) => {
    const g = d.createElement('script',);
    g.async = true;
    g.src = u + file;
    s.appendChild(g,);
  };
  window._paq = window._paq || [];
  const _paq = window._paq;
  _paq.push([ 'trackPageView', ],);
  _paq.push([ 'enableLinkTracking', ],);
  (function() {
    _paq.push([
      'setTrackerUrl',
      u + 'matomo.php',
    ],);
    _paq.push([
      'setSiteId',
      '1wAKBrJmbyXexadajNRk7MYxP',
    ],);
    make('matomo.js',);
  })();
  window._mtm = window._mtm || [];
  const _mtm = window._mtm;
  _mtm.push({
    'mtm.startTime': new Date().getTime(),
    'event': 'mtm.Start',
  },);
  make('js/container_Mf0xOjsp.js',);
}
