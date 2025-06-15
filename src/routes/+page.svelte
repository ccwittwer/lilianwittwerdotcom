<script lang="ts">
	import { onMount } from 'svelte';

	// Player information
	const playerInfo = {
		name: 'Lilian Wittwer',
		position: 'Forward & Midfielder',
		class: 'Class of 2028',
		height: '6\'0"',
		weight: '165 lbs',
		jersey: '7',
		team: 'Battle Ground Academy',
		gpa: '3.8'
	};

	// Stats
	const stats = {
		goals: 15,
		assists: 12,
		gamesPlayed: 20,
		minutesPlayed: 1600
	};

	// Achievements
	const achievements = [
		'All-State First Team',
		'Regional MVP',
		'Team Captain',
		'Academic All-American'
	];

	const topAchievements = [
		'TSC 2010 ECNL #7',
		'BGA 2028 grad',
		'USYNT U14 National ID Camp 2024',
		'2X USYNT IDC 2023',
		'TN State Cup U13 Champions 2023',
		'TN State Cup U15 Finalists 2024',
		'TN ODP'
	];

	// Gallery images
	const galleryImages = [
		'https://source.unsplash.com/random/800x600/?soccer,action',
		'https://source.unsplash.com/random/800x600/?soccer,team',
		'https://source.unsplash.com/random/800x600/?soccer,training'
	];

	let currentImageIndex = 0;
	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>{playerInfo.name} - Soccer Profile</title>
	<meta
		name="description"
		content="Official soccer profile of {playerInfo.name} - {playerInfo.position} | {playerInfo.class}"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main class="bg-gradient-primary min-h-screen text-white">
	<!-- Hero Section with Split Screen -->
	<section class="relative flex min-h-screen flex-col md:flex-row">
		<!-- Hero Image - Full width on mobile, half on desktop -->
		<div class="relative h-[50vh] w-full overflow-hidden md:h-auto md:w-1/2">
			<div
				class="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-transparent md:bg-gradient-to-r"
			></div>
			<div
				class="animate-ken-burns absolute inset-0 bg-[url('/action_winter.jpg')] bg-cover bg-center"
			></div>
		</div>

		<!-- Content - Full width on mobile, half on desktop -->
		<div
			class="from-primary/95 via-secondary/95 to-tertiary/95 relative flex w-full flex-col justify-center bg-gradient-to-br p-6 md:w-1/2 md:p-12"
		>
			<div class="mx-auto w-full max-w-2xl">
				<!-- Player Name and Position -->
				<div class="mb-8 md:mb-12">
					<h1
						class="animate-fade-in-up via-primary-light mb-2 bg-gradient-to-r from-white to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent md:mb-4 md:text-6xl"
						style="animation-delay: 0.2s"
					>
						{playerInfo.name}
					</h1>
					<p
						class="animate-fade-in-up text-primary-light text-xl md:text-2xl"
						style="animation-delay: 0.4s"
					>
						{playerInfo.position} | {playerInfo.class}
					</p>
				</div>

				<!-- Top Achievement -->
				<div
					class="animate-fade-in-up border-primary/30 from-primary/50 to-secondary/50 hover:shadow-primary/20 mb-8 transform rounded-xl border bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:mb-12 md:p-8"
					style="animation-delay: 0.6s; box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
				>
					<a
						href="https://www.tennesseesoccerclub.org/"
						class="group transition-colors hover:text-blue-300"
						target="_blank"
					>
						<div
							class="mb-8 flex transform items-center transition-transform duration-200 group-hover:scale-102"
						>
							<img src="/ECNL_Badge.png" alt="ECNL Badge Logo" class="mr-3 w-8 md:mr-4 md:w-8" />
							<div>
								<div
									class="text-lg font-semibold text-blue-100 group-hover:text-blue-300 md:text-xl"
								>
									Tennessee Soccer Club 2010 ECNL
								</div>
								<div class="text-xs text-blue-200/80 group-hover:text-blue-300 md:text-sm">
									Details...
								</div>
							</div>
						</div>
					</a>

					<a
						href="https://www.ussoccer.com/stories/2024/05/eighty-players-gather-outside-of-san-diego-for-second-girls-u-14-national-identification-camp-of-2024"
						class="group transition-colors hover:text-blue-300"
						target="_blank"
					>
						<div
							class="mb-8 flex transform items-center transition-transform duration-200 group-hover:scale-102"
						>
							<img src="/us_soccer_logo.png" alt="US Soccer Logo" class="mr-3 w-8 md:mr-4 md:w-8" />
							<div>
								<div
									class="text-lg font-semibold text-blue-100 group-hover:text-blue-300 md:text-xl"
								>
									US Soccer U-14 National ID Camp 2024
								</div>
								<div class="text-xs text-blue-200/80 group-hover:text-blue-300 md:text-sm">
									Details...
								</div>
							</div>
						</div>
					</a>

					<a
						href="https://www.battlegroundacademy.org/"
						class="group transition-colors hover:text-blue-300"
						target="_blank"
					>
						<div
							class="flex transform items-center transition-transform duration-200 group-hover:scale-102"
						>
							<img
								src="/BGA_logo-seal-white.svg"
								alt="US Soccer Logo"
								class="mr-3 w-8 md:mr-4 md:w-8"
							/>
							<div>
								<div
									class="text-lg font-semibold text-blue-100 group-hover:text-blue-300 md:text-xl"
								>
									Battle Ground Academy Varsity Soccer
								</div>
								<div class="text-xs text-blue-200/80 group-hover:text-blue-300 md:text-sm">
									Details...
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- Quick Facts -->
				<div
					class="animate-fade-in-up border-primary/30 from-primary/50 to-secondary/50 hover:shadow-primary/20 mb-8 transform rounded-xl border bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:mb-12 md:p-8"
					style="animation-delay: 0.8s; box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
				>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div class="flex items-center">
							<svg
								class="mr-2 h-5 w-5 flex-shrink-0 text-blue-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							<span class="text-sm text-blue-100 md:text-base"
								>{playerInfo.height} | {playerInfo.weight}</span
							>
						</div>
						<div class="flex items-center">
							<svg
								class="mr-2 h-5 w-5 flex-shrink-0 text-blue-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
								/>
							</svg>
							<span class="text-sm text-blue-100 md:text-base">{playerInfo.team}</span>
						</div>
						<div class="flex items-center">
							<svg
								class="mr-2 h-5 w-5 flex-shrink-0 text-blue-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								/>
							</svg>
							<span class="text-sm text-blue-100 md:text-base">GPA: {playerInfo.gpa}</span>
						</div>
						<div class="flex items-center">
							<svg
								class="mr-2 h-5 w-5 flex-shrink-0 text-blue-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span class="text-sm text-blue-100 md:text-base">Jersey #{playerInfo.jersey}</span>
						</div>
					</div>
				</div>

				<!-- Quick Stats -->
				<div
					class="animate-fade-in-up mb-8 grid grid-cols-2 gap-4 md:mb-12 md:gap-6"
					style="animation-delay: 1s"
				>
					{#each Object.entries(stats) as [key, value]}
						<div
							class="border-primary/30 from-primary/50 to-secondary/50 hover:shadow-primary/20 transform rounded-xl border bg-gradient-to-br p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg md:p-6"
							style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
						>
							<div class="text-primary-light mb-1 text-3xl font-bold md:text-4xl">{value}</div>
							<div class="text-primary-light/80 text-xs tracking-wider uppercase md:text-sm">
								{key.replace(/([A-Z])/g, ' $1').trim()}
							</div>
						</div>
					{/each}
				</div>

				<!-- CTA Buttons -->
				<div
					class="animate-fade-in-up flex flex-col gap-4 sm:flex-row md:gap-6"
					style="animation-delay: 1.2s"
				>
					<a
						href="#gallery"
						class="group from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark hover:shadow-primary/20 transform rounded-full bg-gradient-to-r px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4"
						style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
					>
						<span class="flex items-center justify-center">
							View Gallery
							<svg
								class="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</span>
					</a>
					<a
						href="#contact"
						class="group border-primary/50 hover:bg-primary/10 text-primary-light transform rounded-full border-2 px-6 py-3 text-center font-semibold transition-all duration-300 hover:scale-105 md:px-8 md:py-4"
						style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
					>
						<span class="flex items-center justify-center">
							Contact
							<svg
								class="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Gallery Section -->
	<section id="gallery" class="to-primary/30 bg-gradient-to-b from-black/30 px-4 py-16 md:py-32">
		<div class="mx-auto max-w-6xl">
			<h2
				class="via-primary-light mb-12 bg-gradient-to-r from-white to-white bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:mb-16 md:text-5xl"
			>
				Action Gallery
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
				{#each galleryImages as image, i}
					<div
						class="group hover:shadow-primary/20 relative transform overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
					>
						<img
							src={image}
							alt="Player action shot"
							class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-80"
						/>
						<div
							class="from-primary/90 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-6"
						>
							<div
								class="translate-y-4 transform text-white transition-transform duration-300 group-hover:translate-y-0"
							>
								<h3 class="mb-1 text-lg font-semibold md:mb-2 md:text-xl">Action Shot {i + 1}</h3>
								<p class="text-primary-light text-xs md:text-sm">Click to view full size</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Full Bio Section -->
	<section class="relative px-4 py-16 md:py-32">
		<div
			class="from-primary/50 via-secondary/50 absolute inset-0 bg-gradient-to-br to-black/50"
		></div>
		<div class="relative mx-auto max-w-4xl">
			<h2
				class="via-primary-light mb-12 bg-gradient-to-r from-white to-white bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:mb-16 md:text-5xl"
			>
				Full Profile
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
				<div
					class="rounded-2xl border border-blue-700/30 bg-gradient-to-br from-blue-800/50 to-indigo-900/50 p-6 backdrop-blur-sm md:p-8"
				>
					<h3 class="mb-6 text-2xl font-semibold text-blue-100 md:text-3xl">
						Personal Information
					</h3>
					<ul class="space-y-4">
						{#each Object.entries(playerInfo) as [key, value]}
							<li class="flex items-center">
								<div class="w-24 text-sm font-semibold text-blue-300 md:w-32 md:text-base">
									{key.charAt(0).toUpperCase() + key.slice(1)}:
								</div>
								<div class="text-sm text-blue-100 md:text-base">{value}</div>
							</li>
						{/each}
					</ul>
				</div>
				<div
					class="rounded-2xl border border-blue-700/30 bg-gradient-to-br from-blue-800/50 to-indigo-900/50 p-6 backdrop-blur-sm md:p-8"
				>
					<h3 class="mb-6 text-2xl font-semibold text-blue-100 md:text-3xl">Achievements</h3>
					<ul class="space-y-4">
						{#each achievements as achievement}
							<li class="group flex items-center">
								<svg
									class="mr-3 h-5 w-5 transform text-blue-300 transition-transform group-hover:scale-110 md:h-6 md:w-6"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
								<span
									class="text-sm text-blue-100 transition-colors group-hover:text-blue-300 md:text-base"
									>{achievement}</span
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="relative px-4 py-16 md:py-32">
		<div
			class="absolute inset-0 bg-[url('/action_winter.jpg')] bg-cover bg-center opacity-10"
		></div>
		<div class="relative mx-auto max-w-4xl text-center">
			<h2
				class="mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent md:mb-8 md:text-5xl"
			>
				Get in Touch
			</h2>
			<p class="mx-auto mb-8 max-w-2xl text-lg text-blue-100 md:mb-12 md:text-xl">
				Interested in recruiting {playerInfo.name}? Let's discuss how we can work together to
				achieve great things.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row md:gap-6">
				<a
					href="mailto:contact@example.com"
					class="group transform rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/20 md:px-8 md:py-4"
				>
					<span class="flex items-center justify-center">
						<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						Email
					</span>
				</a>
				<a
					href="tel:+1234567890"
					class="group transform rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/20 md:px-8 md:py-4"
				>
					<span class="flex items-center justify-center">
						<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						Phone
					</span>
				</a>
			</div>
		</div>
	</section>
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	@keyframes ken-burns {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.1);
		}
	}

	.animate-ken-burns {
		animation: ken-burns 20s ease-out infinite alternate;
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in-up {
		animation: fade-in-up 0.6s ease-out forwards;
		opacity: 0;
	}
</style>
