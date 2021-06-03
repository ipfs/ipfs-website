export default function (ctx, inject) {
  const options = (ctx.$config && ctx.$config.countly) || {};

  // ctx
  ctx.$countly = {
    events: options.events,
    trackEvent: (event, data) => {
      if (typeof window === 'undefined' || !window.Countly) {
        return;
      }

      // Do not track if clicking the same link several times (after navigating)
      if (data && data.href && data.path && data.href === data.path) {
        return;
      }

      window.Countly.q.push(['add_event', { key: event, segmentation: data }]);

      process.env.NODE_ENV !== 'production' &&
        console.log(
          `✅ [plugin/countly-analytics] trackEvent("${event}", data) event sent`,
          data
        );
    },
  };

  inject('countly', ctx.$countly);

  // client
  if (process.client) {
    if (!options.key || !options.domain) {
      return;
    }

    // prepend countly to the domain
    const domain = options.domain.startsWith('http')
      ? `${options.domain.split('//')[0]}//countly.${
          options.domain.split('//')[1]
        }`
      : `https://countly.${options.domain}`;

    window.Countly = window.Countly || {};
    window.Countly.q = window.Countly.q || [];
    // provide countly initialization parameters
    window.Countly.app_key = options.key;
    window.Countly.url = domain;
    window.Countly.q.push(['track_sessions']);
    window.Countly.q.push(['track_pageview']);
    window.Countly.q.push(['track_clicks']);
    window.Countly.q.push(['track_scrolls']);
    window.Countly.q.push(['track_links']);
    window.Countly.q.push(['track_errors']);
    // Load countly script asynchronously
    const countlyRemoteScript = document.createElement('script');
    countlyRemoteScript.type = 'text/javascript';
    countlyRemoteScript.async = true;
    countlyRemoteScript.src = `${domain}/sdk/web/countly.min.js`;
    countlyRemoteScript.onload = function () {
      window.Countly.init();
    };
    const script = document.getElementsByTagName('script')[0];
    script.parentNode.insertBefore(countlyRemoteScript, script);

    ctx.app.router.afterEach((to) => {
      if (!window.Countly) {
        return;
      }

      window.Countly.q.push(['track_pageview', to.path]);
    });
  }
}
