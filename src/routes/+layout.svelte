<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		// Redirect to default color scheme if at root
		if (window.location.pathname === '/') {
			goto('/profile');
		}
	});
</script>

<slot />
