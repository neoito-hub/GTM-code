document.addEventListener('DOMContentLoaded', () => {
	/* init gtm after 3500 seconds - this could be adjusted */
	setTimeout(initGTM, 3500);
});
document.addEventListener('scroll', initGTMOnEvent);
document.addEventListener('mousemove', initGTMOnEvent);
document.addEventListener('touchstart', initGTMOnEvent);

function initGTMOnEvent (event) {
	initGTM();
	event.currentTarget.removeEventListener(event.type, initGTMOnEvent); // remove the event listener that got triggered
}

function initGTM () {
	if (window.gtmDidInit) {
		return false;
	}
	window.gtmDidInit = true; // flag to ensure script does not get added to DOM more than once.
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = true;
	script.onload = () => { dataLayer.push({ event: 'gtm.js', 'gtm.start': (new Date()).getTime(), 'gtm.uniqueEventId': 0 }); } // this part ensures PageViews is always tracked
	script.src = 'https://www.googletagmanager.com/gtm.js?id=YOUR-GTM-ID-HERE';

	document.head.appendChild(script);
}
