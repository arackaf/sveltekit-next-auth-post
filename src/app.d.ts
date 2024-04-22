import { DefaultSession } from '@auth/core/types';

declare module '@auth/core/types' {
	interface Session {
		userId: string;
		legacySync: boolean;
		user: DefaultSession['user'];
	}
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}
