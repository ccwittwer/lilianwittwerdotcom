<script lang="ts">
	import { page } from '$app/stores';
	import { schoolColors } from '$lib/config/colors';
	import '../../app.css';

	$: school = $page.params.school || 'default';
	$: colors = schoolColors[school] || schoolColors.default;

	// Update CSS variables when colors change
	$: {
		if (typeof document !== 'undefined') {
			document.documentElement.style.setProperty('--color-primary', colors.primary);
			document.documentElement.style.setProperty('--color-secondary', colors.secondary);
			document.documentElement.style.setProperty('--color-tertiary', colors.tertiary);
		}
	}
</script>

<slot />
