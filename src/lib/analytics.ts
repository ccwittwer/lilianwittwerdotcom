declare global {
	interface Window {
		gtag: (...args: any[]) => void;
	}
}

export const GA_MEASUREMENT_ID = 'G-8EGYT1VHL2'; // Replace with your actual ID

// Initialize Google Analytics
export function initGA() {
	if (typeof window !== 'undefined') {
		// Load the Google Analytics script
		const script = document.createElement('script');
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
		document.head.appendChild(script);

		// Initialize gtag
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		window.gtag('config', GA_MEASUREMENT_ID, {
			page_title: document.title,
			page_location: window.location.href
		});
	}
}

// Track page views
export function trackPageView(url: string) {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('config', GA_MEASUREMENT_ID, {
			page_path: url
		});
	}
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('event', eventName, parameters);
	}
}
