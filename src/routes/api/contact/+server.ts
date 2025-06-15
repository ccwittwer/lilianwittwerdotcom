import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email, message } = await request.json();

		// Here you would typically:
		// 1. Validate the input
		// 2. Send an email using a service like SendGrid, AWS SES, etc.
		// 3. Store the message in a database if needed

		// For now, we'll just log it
		console.log('Contact form submission:', { email, message });

		return json({ success: true });
	} catch (error) {
		console.error('Error processing contact form:', error);
		return json({ success: false }, { status: 500 });
	}
};
