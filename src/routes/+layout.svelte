<script lang="ts">
	import Ticker from '$lib/components/Ticker.svelte';
	import { gameStats } from '$lib/data';
	import '../app.css';

	// onMount(() => {
	// 	// Redirect to default color scheme if at root
	// 	if (window.location.pathname === '/') {
	// 		goto('/profile');
	// 	}
	// });
</script>

<slot />
<Ticker {gameStats} />

<svelte:head>
	<title>Lilian Wittwer - Women's Soccer - Class of 2028</title>
	<meta name="description" content="Lilian Wittwer - Soccer Player Profile" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="apple-touch-icon" href="/favicon.svg" />
	<meta name="theme-color" content="#002B5C" />
</svelte:head>
