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
  // @ts-expect-error paq is a new property
  window._paq = window._paq || [];
  // @ts-expect-error paq is a new property
  const _paq = window._paq;
  _paq.push([ 'requireConsent', ],);
  _paq.push([ 'trackPageView', ],);
  _paq.push([ 'enableLinkTracking', ],);
  (function() {
    _paq.push([
      'setTrackerUrl',
      u + 'matomo.php',
    ],);
    _paq.push([
      'setSiteId',
      'jqvEzlmebRJKAVxYo2ND0VXk8',
    ],);
    make('matomo.js',);
  })();
  // @ts-expect-error mtm is a new property
  window._mtm = window._mtm || [];
  // @ts-expect-error mtm is a new property
  const _mtm = window._mtm;
  _mtm.push({
    'mtm.startTime': new Date().getTime(),
    'event': 'mtm.Start',
  },);
  make('js/container_Nt38ZwM5.js',);
}
