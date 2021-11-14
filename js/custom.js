/*  

<!-- Segment Javascript Snippet for tracking events -->
<!-- <script src="js/custom.js" type="text/javascript"></script> -->
  <script>
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="4Aln8gFzldcr7GyAO4xMzZgbsnwuCGjC";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("4Aln8gFzldcr7GyAO4xMzZgbsnwuCGjC");
  analytics.page();
  }}();
</script>

*/

// Segment Javascript Snippet for tracking events

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="4Aln8gFzldcr7GyAO4xMzZgbsnwuCGjC";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("4Aln8gFzldcr7GyAO4xMzZgbsnwuCGjC");
  analytics.page();
  }}();

// Button Clicked Event

function buttonClicked() {
    analytics.track('Button Clicked', {label: 'get_app'});
};

// Form Submitted Event



// Purchase Event

function pricingOptionMoon() {
    analytics.track('Button Clicked', {
        label: 'purchase',
        pricing_option: 'Moon',
        price:0
    });
};

function pricingOptionPlanet() {
    analytics.track('Button Clicked', {
        label: 'purchase',
        pricing_option: 'Planet',
        price:6
    });
};

function pricingOptionGalaxy() {
    analytics.track('Button Clicked', {
        label: 'purchase',
        pricing_option: 'Galaxy',
        price:24
    });
};