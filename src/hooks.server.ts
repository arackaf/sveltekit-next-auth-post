import { SvelteKitAuth } from '@auth/sveltekit';
import { AUTH_SECRET, GOOGLE_AUTH_CLIENT_ID, GOOGLE_AUTH_SECRET } from '$env/static/private';
import GoogleProvider from '@auth/core/providers/google';

const auth = SvelteKitAuth({
	providers: [
		// @ts-ignore
		GoogleProvider({
			clientId: GOOGLE_AUTH_CLIENT_ID,
			clientSecret: GOOGLE_AUTH_SECRET
		})
	],
	session: {
		maxAge: 60 * 60 * 24 * 365,
		strategy: 'jwt'
	},

	secret: AUTH_SECRET
});

export const handle = auth;
