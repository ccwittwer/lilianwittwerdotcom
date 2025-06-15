import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('redirecting to /profile');
	throw redirect(307, '/profile');
};
