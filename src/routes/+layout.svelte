<script lang="ts">
	import type { PageData } from './$types';
	import { signIn, signOut } from '@auth/sveltekit/client';

	export let data: PageData;
	$: loggedIn = data.loggedIn;
</script>

<main>
	<h1>Hello there! This is the shared layout.</h1>

	{#if loggedIn}
		<div>Welcome!</div>
		<a href="/logged-in">Go to logged in area</a>
		<br />
		<br />
		<button on:click={() => signOut()}>Log Out</button>
	{:else}
		<button on:click={() => signIn('google')}>Log in</button>
	{/if}
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		padding: 100px;
	}

	section {
		padding: 50px;
	}
</style>
