<script lang="ts">
	import { scheduleEvents } from '$lib/data';
	import { onMount } from 'svelte';

	export let gameStats: Array<{ category: string; content: string; url?: string }>;

	let currentStatIndex = 0;
	let isVisible = true;

	$: upcomingEvents = scheduleEvents.filter((event) => event.date >= new Date().toISOString());

	let nextGame = upcomingEvents && upcomingEvents.length > 0 ? upcomingEvents[0] : null;

	function cycleStats() {
		isVisible = false;
		setTimeout(() => {
			currentStatIndex = (currentStatIndex + 1) % gameStats.length;
			isVisible = true;
		}, 800);
	}

	onMount(() => {
		const statInterval = setInterval(cycleStats, 8000);
		return () => clearInterval(statInterval);
	});
</script>

<div
	class="fixed bottom-0 left-0 right-0 z-50 hidden border-t border-white/10 bg-black py-3 md:block"
>
	<div class="mx-auto flex items-center px-4">
		<span class="text-ticker mr-4 min-w-[180px] border-r border-white pr-4 font-bold"
			>{gameStats[currentStatIndex].category}</span
		>
		<div class="relative flex-1">
			<div
				class="duration-800 transition-opacity"
				class:opacity-0={!isVisible}
				class:opacity-100={isVisible}
			>
				{#if gameStats[currentStatIndex].url}
					<a
						href={gameStats[currentStatIndex].url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-white hover:underline"
					>
						{gameStats[currentStatIndex].content}
						<span class="text-xs text-white/80">[More info...]</span>
					</a>
				{:else}
					<span class="text-white">{gameStats[currentStatIndex].content}</span>
				{/if}
			</div>
		</div>
		<div class="ml-8 pl-8">
			<div class="flex items-center gap-4">
				<div class="text-ticker border-r border-white pr-4 font-bold">NEXT GAME</div>
				<div class="text-white">
					{#if nextGame}
						<a href="#schedule">
							<span class="font-medium">{nextGame.date} • {nextGame.time}</span>
							<span class="mx-2">•</span>
							<span>vs {nextGame.opponent}</span>
							<!-- <span class="mx-2">•</span> -->
							<!-- <span>{nextGame.location}</span> -->
						</a>
					{:else}
						<span class="text-white">Schedule coming soon</span>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
