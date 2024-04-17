import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const parentData = await parent();

	if (!parentData.loggedIn) {
		redirect(302, '/');
	}
};
