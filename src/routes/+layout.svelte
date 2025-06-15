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
