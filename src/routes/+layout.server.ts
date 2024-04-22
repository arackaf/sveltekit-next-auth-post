export const load = async ({ locals }) => {
	const session = await locals.getSession();
	const loggedIn = !!session?.user;

	const legacySync = session.legacySync;
	const userId = session.userId;

	return {
		loggedIn,
		userId,
		legacySync
	};
};
