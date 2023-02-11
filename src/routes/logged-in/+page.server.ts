import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }: any) => {
	throw redirect(302, '/');
};
