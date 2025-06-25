<script lang="ts">
	import { page } from '$app/stores';
	import {
		achievements,
		galleryItems,
		newsArticles,
		playerInfo,
		playerInfoList,
		seasonStats,
		upcomingSchedule
	} from '$lib/data';
	import { onMount } from 'svelte';

	$: school = $page.params.school || 'default';

	let currentSection = 'hero';
	let showNav = false;
	let showVideoModal = false;
	let currentVideo = '';
	let email = '';
	let message = '';
	let isSubmitting = false;
	let submitStatus = { type: '', message: '' };
	let isNavExpanded = true;
	let navTimeout: NodeJS.Timeout;

	// Image modal state
	let showImageModal = false;
	let selectedImage = '';

	function openImageModal(item: string | { thumbnail: string; url: string; description: string }) {
		if (typeof item === 'string') {
			selectedImage = item;
			showImageModal = true;
			document.body.style.overflow = 'hidden';
		} else {
			openVideoModal(item.url);
		}
	}

	function closeImageModal() {
		showImageModal = false;
		document.body.style.overflow = '';
	}

	// Close modal on escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showImageModal) {
			closeImageModal();
		}
	}

	function resetNavTimeout() {
		if (navTimeout) clearTimeout(navTimeout);
		isNavExpanded = true;
		navTimeout = setTimeout(() => {
			if (showNav) isNavExpanded = false;
		}, 1500);
	}

	async function handleSubmit() {
		isSubmitting = true;
		submitStatus = { type: '', message: '' };

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, message })
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			submitStatus = {
				type: 'success',
				message: 'Message sent successfully! I will get back to you soon.'
			};
			email = '';
			message = '';
		} catch (error) {
			submitStatus = {
				type: 'error',
				message: 'Failed to send message. Please try again later.'
			};
		} finally {
			isSubmitting = false;
		}
	}

	function handleScroll() {
		const scrollY = window.scrollY;
		showNav = scrollY > 0;
		if (showNav) {
			resetNavTimeout();
		} else {
			isNavExpanded = false;
		}

		// Determine which section is in view
		const sections = ['hero', 'gallery', 'profile', 'contact'];
		const sectionElements = sections.map((id) => document.getElementById(id));

		// Find the section that's most visible in the viewport
		const viewportHeight = window.innerHeight;
		const viewportMiddle = scrollY + viewportHeight / 2;

		let maxVisibility = 0;
		let mostVisibleSection = 'hero';

		sectionElements.forEach((element, index) => {
			if (element) {
				const rect = element.getBoundingClientRect();
				const elementMiddle = rect.top + rect.height / 2 + scrollY;
				const distanceFromViewportMiddle = Math.abs(viewportMiddle - elementMiddle);
				const visibility = 1 - distanceFromViewportMiddle / viewportHeight;

				if (visibility > maxVisibility) {
					maxVisibility = visibility;
					mostVisibleSection = sections[index];
				}
			}
		});

		currentSection = mostVisibleSection;
	}

	function openVideoModal(videoSrc: string) {
		currentVideo = videoSrc;
		showVideoModal = true;
	}

	function closeVideoModal() {
		showVideoModal = false;
		currentVideo = '';
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
	<title>{playerInfo.name} - Class of {playerInfo.class}</title>
	<meta
		name="description"
		content="Official soccer profile of {playerInfo.name} - {playerInfo.position} | {playerInfo.class}"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main class="bg-gradient-primary min-h-screen text-white">
	<!-- Hero Section with Split Screen -->
	<section
		id="hero"
		class="relative flex min-h-screen flex-col border-b-2 border-white/10 md:flex-row"
	>
		<!-- Hero Image - Full width on mobile, half on desktop -->
		<div class="relative h-[50vh] w-full overflow-hidden md:h-auto md:w-1/2">
			<div
				class="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/30 to-transparent md:bg-gradient-to-r"
			></div>
			<!-- Background Video -->
			<video
				class="absolute inset-0 h-full w-full object-cover"
				autoplay
				muted
				loop
				playsinline
				poster="/action_winter.jpg"
			>
				<source src="/bg_sequence_compressed.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<!-- Cutout Overlay -->
			<img
				src="/bga_posed_pointing_cutout.png"
				alt="Lilian Wittwer pointing"
				class="absolute bottom-0 left-0 z-20 h-auto w-1/2 max-w-xs object-contain md:w-1/2 md:max-w-sm"
				style="filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));"
			/>
		</div>

		<!-- Content - Full width on mobile, half on desktop -->
		<div
			class="from-primary/95 via-secondary/95 to-tertiary/95 relative flex w-full flex-col justify-center bg-gradient-to-br p-6 md:w-1/2 md:p-12"
		>
			<!-- TSC Logo Background Watermark -->
			<img
				src="/TSC_logo.svg"
				alt="TSC Logo Background"
				class="absolute right-4 top-1/4 h-64 w-64 -translate-y-1/2 opacity-10 md:right-8 md:h-96 md:w-96"
			/>
			<div class="mx-auto w-full max-w-2xl">
				<!-- Player Name and Position -->
				<div class="mb-8 md:mb-8">
					<h1
						class="animate-fade-in-up via-primary-light mb-2 bg-gradient-to-r from-white to-white bg-clip-text text-4xl font-bold tracking-tight md:mb-4 md:text-6xl"
						style="animation-delay: 0.2s"
					>
						{playerInfo.name}
					</h1>
					<p
						class="animate-fade-in-up text-primary-light text-xl md:text-2xl"
						style="animation-delay: 0.4s"
					>
						{playerInfo.position}
						<span class="border-secondary ml-2 whitespace-nowrap border-l-4 pl-3 font-semibold"
							>{playerInfo.club}</span
						>
					</p>
					<p
						class="animate-fade-in-up text-primary-light text-xl md:text-2xl"
						style="animation-delay: 0.4s"
					>
						Class of {playerInfo.class}
						<span class="border-secondary ml-2 whitespace-nowrap border-l-4 pl-3 font-semibold"
							>{playerInfo.school}</span
						>
					</p>
					<p
						class="animate-fade-in-up text-primary-light text-xl md:text-2xl"
						style="animation-delay: 0.4s"
					>
						{playerInfo.hometown}
					</p>
				</div>
				<!-- Player Message -->
				<!-- <div
					class="animate-fade-in-up from-primary/50 to-secondary/50 mb-8 transform rounded-xl p-2 transition-all duration-300 md:mb-4 md:p-4"
					style="animation-delay: 0.6s; "
				>
					<div>
						<div class="flex items-start">
							<svg
								class="mr-4 h-8 w-8 flex-shrink-0 text-white/80"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
								/>
							</svg>
							<div
								class="group-hover:text-gray-100y text-md md:text-md text-justify font-semibold text-white"
							>
								Thank you for your interest in learning more about me.
								<br />As a forward for Tennessee Soccer Club 2010 ECNL, I've developed a playing
								style that combines technical skill with creative vision. My passion for the game
								shows in my dedication to both individual development and team success. I'm excited
								about the prospect of continuing my academic and athletic journey at the collegiate
								level, where I can contribute my attacking mindset and competitive drive.
								<br />
								<span
									class="text-white/80"
									style="font-family: 'Brush Script MT', cursive; font-size: 1.4em;"
									>- Lilian Wittwer</span
								>
							</div>
						</div>
					</div>
				</div> -->

				<!-- Top Achievement -->
				<div
					class="animate-fade-in-up border-primary/30 from-primary/50 to-secondary/50 hover:shadow-primary/20 mb-8 transform rounded-xl border bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:mb-8 md:p-12"
					style="animation-delay: 0.6s; box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
				>
					<a
						href="https://www.tennesseesoccerclub.org/"
						class="hover:text-tertiary group transition-colors"
						target="_blank"
					>
						<div
							class="group-hover:scale-102 mb-8 flex transform items-center transition-transform duration-200"
						>
							<img src="/ECNL_Badge.png" alt="ECNL Badge Logo" class="mr-3 w-8 md:mr-4 md:w-8" />
							<div>
								<div class="group-hover:text-gray-100y text-lg font-semibold text-white md:text-xl">
									Tennessee Soccer Club 2010 ECNL
								</div>
								<div class="text-xs text-white group-hover:text-gray-100 md:text-sm">
									More info...
								</div>
							</div>
						</div>
					</a>

					<a
						href="https://www.ussoccer.com/stories/2024/05/eighty-players-gather-outside-of-san-diego-for-second-girls-u-14-national-identification-camp-of-2024"
						class="hover:text-tertiary group transition-colors"
						target="_blank"
					>
						<div
							class="group-hover:scale-102 mb-8 flex transform items-center transition-transform duration-200"
						>
							<img src="/us_soccer_logo.png" alt="US Soccer Logo" class="mr-3 w-8 md:mr-4 md:w-8" />
							<div>
								<div class="text-lg font-semibold text-white group-hover:text-gray-100 md:text-xl">
									US Soccer U-14 National ID Camp 2024
								</div>
								<div class="text-xs text-white group-hover:text-gray-100 md:text-sm">
									More info...
								</div>
							</div>
						</div>
					</a>

					<a href="/bga" class="hover:text-tertiary group transition-colors">
						<div
							class="group-hover:scale-102 flex transform items-center transition-transform duration-200"
						>
							<img
								src="/BGA_logo-seal-white.svg"
								alt="US Soccer Logo"
								class="mr-3 w-8 text-white md:mr-4 md:w-8"
							/>
							<div>
								<div class="text-lg font-semibold text-white group-hover:text-gray-100 md:text-xl">
									Battle Ground Academy Varsity Soccer
								</div>
								<div class="text-xs text-white group-hover:text-gray-100 md:text-sm">
									More info...
								</div>
							</div>
						</div>
					</a>
				</div>

				<!-- Quick Facts -->
				<!-- <div
					class="animate-fade-in-up border-primary/30 from-primary/50 to-secondary/50 hover:shadow-primary/20 mb-8 transform rounded-xl border bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:mb-12 md:p-8"
					style="animation-delay: 0.8s; box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
				>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div class="flex items-center">
							<svg
								class="mr-2 h-5 w-5 flex-shrink-0 text-white"
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
								class="mr-2 h-5 w-5 flex-shrink-0 text-white"
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
								class="mr-2 h-5 w-5 flex-shrink-0 text-white"
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
								class="mr-2 h-5 w-5 flex-shrink-0 text-white"
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
				</div> -->

				<!-- Quick Stats -->
				<!-- <div
					class="animate-fade-in-up mb-8 grid grid-cols-2 gap-4 md:mb-12 md:gap-6"
					style="animation-delay: 1s"
				>
					{#each Object.entries(stats) as [key, value]}
						<div
							class="border-primary/30 from-primary/50 to-secondary/50 hover:shadow-primary/20 transform rounded-xl border bg-gradient-to-br p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:p-6"
							style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
						>
							<div class="text-primary-light mb-1 text-3xl font-bold md:text-4xl">{value}</div>
							<div class="text-primary-light/80 text-xs tracking-wider uppercase md:text-sm">
								{key.replace(/([A-Z])/g, ' $1').trim()}
							</div>
						</div>
					{/each}
				</div> -->

				<!-- CTA Buttons -->
				<div
					class="animate-fade-in-up flex flex-col gap-4 sm:flex-row md:gap-6"
					style="animation-delay: 1.2s"
				>
					<a
						href="#gallery"
						class="bg-primary hover:bg-primary-dark hover:shadow-primary/20 group transform rounded-full border-2 border-white/20 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4"
						style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
					>
						<span class="flex items-center justify-center">
							<svg
								class="mr-2 h-5 w-5 transform transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							Highlights
						</span>
					</a>
					<a
						href="#profile"
						class="bg-primary hover:bg-primary-dark hover:shadow-primary/20 group transform whitespace-nowrap rounded-full border-2 border-white/20 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4"
						style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
					>
						<span class="flex items-center justify-center">
							<svg
								class="mr-2 h-5 w-5 transform transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							Profile & Info
						</span>
					</a>
					<a
						href="#contact"
						class="bg-primary hover:bg-primary-dark hover:shadow-primary/20 group transform rounded-full border-2 border-white/20 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4"
						style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
					>
						<span class="flex items-center justify-center">
							<svg
								class="mr-2 h-5 w-5 transform transition-transform"
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
							Contact
						</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Gallery Section -->
	<section
		id="gallery"
		class="relative flex min-h-screen items-center overflow-hidden border-b-2 border-white/10 px-4"
	>
		<!-- Background with Ken Burns effect -->
		<div
			class="absolute inset-0 bg-[url('/BGA_dribbling_action.JPG')] bg-cover bg-center opacity-10"
		>
			<div class="ken-burns-zoom"></div>
		</div>
		<div class="to-primary/30 absolute inset-0 bg-gradient-to-b from-black/30"></div>

		<div class="mx-auto w-full max-w-6xl py-16 md:py-32">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
				{#each galleryItems as item, i}
					<div
						class="hover:shadow-primary/20 group relative transform cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
						on:click={() => openImageModal(item)}
					>
						{#if typeof item === 'string'}
							<img src={item} alt="Gallery image" class="h-64 w-full object-cover" />
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<div class="absolute bottom-4 left-4 text-white">
									<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
										/>
									</svg>
								</div>
							</div>
						{:else}
							<button
								type="button"
								class="relative flex h-64 w-full cursor-pointer items-center justify-center bg-black/40"
							>
								<img
									src={item.thumbnail}
									alt={item.description || 'Video thumbnail'}
									class="absolute inset-0 h-full w-full object-cover opacity-80"
								/>
								<svg
									class="relative z-10 h-16 w-16 transform text-white transition-transform duration-300 group-hover:scale-110"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								{#if item.description}
									<div class="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
										<p class="text-sm">{item.description}</p>
									</div>
								{/if}
							</button>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Video Modal -->
	{#if showVideoModal}
		<div
			class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
			on:click={closeVideoModal}
		>
			<div class="relative w-full max-w-4xl p-4" on:click|stopPropagation>
				<button
					class="absolute -right-2 -top-2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
					on:click={closeVideoModal}
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<div class="aspect-video w-full overflow-hidden rounded-lg">
					<iframe
						src={currentVideo}
						class="h-full w-full"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</div>
			</div>
		</div>
	{/if}

	<!-- Image Modal -->
	{#if showImageModal}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
			on:click={closeImageModal}
		>
			<button
				class="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
				on:click={closeImageModal}
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<img
				src={selectedImage}
				alt="Full size image"
				class="max-h-[90vh] max-w-[90vw] object-contain"
				on:click|stopPropagation
			/>
		</div>
	{/if}

	<!-- Full Bio Section -->
	<section
		id="profile"
		class="relative min-h-screen overflow-hidden border-b-2 border-white/10 px-4 pb-24 pt-16 md:py-32"
	>
		<!-- Background with Ken Burns effect -->
		<div class="absolute inset-0 bg-[url('/BGA_passing_action.JPG')] bg-cover bg-center opacity-10">
			<div class="ken-burns-zoom"></div>
		</div>
		<div class="to-primary/30 absolute inset-0 bg-gradient-to-b from-black/30"></div>

		<div class="container relative mx-auto">
			<h2
				class="via-primary-light mb-12 bg-gradient-to-r from-white to-white bg-clip-text text-center text-4xl font-bold tracking-tight md:mb-16 md:text-5xl"
			>
				Profile & Info
			</h2>
			<div class="grid grid-cols-1 md:grid-flow-col md:grid-cols-2 md:grid-rows-1 md:gap-16">
				<div class="md:col-start-1">
					<div class="mb-8">
						<div class="flex items-center justify-between">
							<h3 class="mb-8 text-2xl font-semibold text-white">Player Profile</h3>
							<button
								class="flex cursor-pointer items-center rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-white/80 transition-all hover:border-white/20 hover:bg-black/60 hover:text-white active:bg-black/50"
								on:click={() => {
									const text = playerInfoList
										.map((item) => `${item.key}: ${item.value}`)
										.join('\n');
									navigator.clipboard.writeText(text);

									// Create and show toast notification
									const toast = document.createElement('div');
									toast.className =
										'fixed top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300';
									toast.textContent = 'Player info copied to clipboard';
									document.body.appendChild(toast);

									// Remove toast after 2 seconds
									setTimeout(() => {
										toast.style.opacity = '0';
										setTimeout(() => {
											document.body.removeChild(toast);
										}, 300);
									}, 2000);
								}}
							>
								<svg class="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
									/>
								</svg>
								Copy to Clipboard
							</button>
						</div>
						<div
							class="hover:shadow-primary/20 transform rounded-xl border border-white/10 bg-black/50 p-6 transition-all duration-300 md:p-8"
						>
							<ul class="space-y-4">
								{#each playerInfoList as item}
									<li class="flex items-center">
										<div class="w-24 text-sm font-semibold text-white/80 md:w-32 md:text-base">
											{item.key}
										</div>
										<div class="text-sm text-white md:text-base">{item.value}</div>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<div class="mb-8">
						<h3 class="mb-8 text-2xl font-semibold text-white">Key Achievements</h3>
						<div
							class="hover:shadow-primary/20 transform rounded-xl border border-white/10 bg-black/50 p-6 transition-all duration-300 md:p-8"
						>
							<ul class="space-y-4">
								{#each achievements as achievement}
									<li class="group flex items-center">
										<svg
											class="mr-3 h-5 w-5 transform text-white/80 transition-transform group-hover:scale-110 md:h-6 md:w-6"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fill-rule="evenodd"
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
												clip-rule="evenodd"
											/>
										</svg>
										<span
											class="text-sm text-white transition-colors group-hover:text-white/80 md:text-base"
											>{achievement}</span
										>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<div class="mb-8">
						<h3 class="mb-8 text-2xl font-semibold text-white">Season Stats</h3>
						<div
							class="hover:shadow-primary/20 transform rounded-xl border border-white/10 bg-black/50 p-6 transition-all duration-300 md:p-8"
						>
							<ul class="space-y-6">
								{#each seasonStats as season}
									<li>
										<div class="mb-2">
											<span class="text-sm font-semibold text-white/80 md:text-xl"
												>{season.group}</span
											>
										</div>
										<ul class="space-y-2">
											{#each season.stats as stat}
												<li class="flex items-center justify-between">
													<span class="text-sm font-medium text-white/60 md:text-base"
														>{stat.category}</span
													>
													<span class="font-mono text-lg font-bold text-white md:text-xl"
														>{stat.value}</span
													>
												</li>
											{/each}
										</ul>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>

				<!-- News Panel -->
				<div class="md:col-start-2">
					<div class="mb-8">
						<h3 class="mb-8 text-2xl font-semibold text-white">Latest News</h3>
						<div class="grid grid-cols-1 gap-6">
							{#each newsArticles as article}
								<a
									href={article.url}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:shadow-primary/20 group block transform rounded-xl border border-white/10 bg-black/50 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-black/70 hover:shadow-lg"
								>
									<div class="flex items-center gap-2">
										<h4
											class="group-hover:text-primary-light flex-1 text-lg font-semibold text-white"
										>
											{article.title}
										</h4>
										<svg
											class="group-hover:text-primary-light h-4 w-4 text-white/60"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
									</div>
									<div class="flex items-center justify-between text-sm text-white/60">
										<span>{article.source}</span>
										<span>{article.date}</span>
									</div>
								</a>
							{/each}
						</div>
					</div>
					<div class="mb-8">
						<h3 id="schedule" class="mb-8 text-2xl font-semibold text-white">Upcoming Schedule</h3>
						<div class="grid grid-cols-1 gap-6">
							{#each upcomingSchedule as event}
								<div
									class="hover:shadow-primary/20 group block transform rounded-xl border border-white/10 bg-black/50 p-4 transition-all duration-300"
								>
									<div class="flex items-start gap-4">
										<div
											class="flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-lg border border-white/10 bg-black/30 text-center"
										>
											<span class="text-sm font-medium text-white/60"
												>{new Date(event.date).toLocaleString('default', { month: 'short' })}</span
											>
											<span class="text-lg font-bold text-white"
												>{new Date(event.date).getDate()}</span
											>
										</div>
										<div class="flex-1">
											<h4
												class="group-hover:text-primary-light mb-2 text-lg font-semibold text-white"
											>
												{event.opponent}
											</h4>
											<div class="space-y-1">
												<div class="flex items-center text-sm text-white/60">
													<svg
														class="mr-2 h-4 w-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
													{event.time}
												</div>
												<div class="flex items-center text-sm text-white/60">
													<svg
														class="mr-2 h-4 w-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
														/>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
														/>
													</svg>
													{#if event.map}
														<a href={event.map} target="_blank" rel="noopener noreferrer">
															{event.location}
														</a>
													{:else}
														{event.location}
													{/if}
												</div>
												<div
													class="bg-primary/20 text-primary-light inline-block rounded-full px-2 py-1 text-xs font-medium"
												>
													{event.type}
												</div>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="relative min-h-screen overflow-hidden px-4 pb-24 pt-16 md:py-32">
		<!-- Background with Ken Burns effect -->
		<div class="absolute inset-0 bg-[url('/action_white.jpg')] bg-cover bg-center opacity-10">
			<div class="ken-burns-zoom"></div>
		</div>

		<div class="relative mx-auto max-w-4xl text-center">
			<h2
				class="mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-4xl font-bold tracking-tight md:mb-8 md:text-5xl"
			>
				Get in Touch
			</h2>
			<p class="mx-auto mb-8 max-w-2xl text-lg md:mb-12 md:text-xl">
				<span
					class="bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text font-medium text-transparent"
				>
					Thank you for your interest in my soccer journey!
				</span>
				<br class="hidden md:block" />
				<span class="mt-2 block text-blue-100/90">
					Stay connected for updates on my latest achievements and development.
					<br class="hidden md:block" />
					I'd love to share more about my passion for the sport - reach out anytime below.
				</span>
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row md:gap-6">
				<!-- <a
					href="mailto:contact@example.com"
					class="group bg-primary hover:bg-primary-dark hover:shadow-primary/20 transform rounded-full border-2 border-white/20 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4"
					style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
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
				</a> -->
				<!-- <a
					href="tel:+1234567890"
					class="group bg-primary hover:bg-primary-dark hover:shadow-primary/20 transform rounded-full border-2 border-white/20 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4"
					style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
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
				</a> -->
				<a
					href="https://instagram.com/lilianwittwer7"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-primary hover:bg-primary-dark hover:shadow-primary/20 group transform rounded-full border-2 border-white/20 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4"
					style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
				>
					<span class="flex items-center justify-center">
						<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
						Instagram
					</span>
				</a>
				<a
					href="https://twitter.com/lilianwittwer"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-primary hover:bg-primary-dark hover:shadow-primary/20 group transform rounded-full border-2 border-white/20 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:px-8 md:py-4"
					style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
				>
					<span class="flex items-center justify-center">
						<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
						Twitter
					</span>
				</a>
			</div>

			<!-- Contact Form -->
			<!-- <form
				class="mx-auto mt-16 max-w-xl rounded-xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm"
				on:submit|preventDefault={handleSubmit}
			>
				<div class="mb-6">
					<label for="email" class="mb-2 block text-sm font-medium text-white">Email Address</label>
					<input
						type="email"
						id="email"
						bind:value={email}
						class="focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-white placeholder-white/50 focus:outline-none focus:ring-2"
						placeholder="your@email.com"
						required
					/>
				</div>
				<div class="mb-6">
					<label for="message" class="mb-2 block text-sm font-medium text-white">Message</label>
					<textarea
						id="message"
						bind:value={message}
						rows="4"
						class="focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-white placeholder-white/50 focus:outline-none focus:ring-2"
						placeholder="Your message here..."
						required
					></textarea>
				</div>
				<button
					type="submit"
					class="bg-primary hover:bg-primary-dark hover:shadow-primary/20 group w-full transform rounded-lg border-2 border-white/20 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
					style="box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);"
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
						Send Message
					</span>
				</button>
			</form> -->
		</div>
	</section>
</main>

<!-- Floating Navigation -->
<div
	class="fixed left-8 top-8 z-40 hidden transform transition-all duration-300 md:block"
	class:opacity-0={!showNav}
	class:opacity-100={showNav}
	class:translate-x-0={showNav}
	class:-translate-x-full={!showNav}
	on:mouseenter={resetNavTimeout}
	on:mouseleave={() => {
		if (showNav) {
			navTimeout = setTimeout(() => {
				isNavExpanded = false;
			}, 1500);
		}
	}}
>
	<div class="relative h-52 w-36 transition-all duration-300" class:w-12={!isNavExpanded}>
		<!-- Field Background with Image -->
		<div class="absolute inset-0 overflow-hidden rounded-lg">
			<img
				src="/soccer_field_transparent.png"
				alt="Soccer Field"
				class="h-full w-full object-contain opacity-60"
			/>

			<!-- Navigation Links -->
			<div class="absolute inset-0 flex flex-col">
				<a
					href="#hero"
					class="group flex h-1/4 w-full items-center justify-center transition-all hover:bg-white/10 {currentSection ===
						'hero' && isNavExpanded
						? 'bg-white/20'
						: ''}"
				>
					<span
						class="text-xs font-medium text-white transition-opacity duration-300"
						class:opacity-0={!isNavExpanded}>Home</span
					>
				</a>
				<a
					href="#gallery"
					class="group flex h-1/4 w-full items-center justify-center transition-all hover:bg-white/10 {currentSection ===
						'gallery' && isNavExpanded
						? 'bg-white/20'
						: ''}"
				>
					<span
						class="text-xs font-medium text-white transition-opacity duration-300"
						class:opacity-0={!isNavExpanded}>Highlights</span
					>
				</a>
				<a
					href="#profile"
					class="group flex h-1/4 w-full items-center justify-center transition-all hover:bg-white/10 {currentSection ===
						'profile' && isNavExpanded
						? 'bg-white/20'
						: ''}"
				>
					<span
						class="text-xs font-medium text-white transition-opacity duration-300"
						class:opacity-0={!isNavExpanded}>Profile</span
					>
				</a>
				<a
					href="#contact"
					class="group flex h-1/4 w-full items-center justify-center transition-all hover:bg-white/10 {currentSection ===
						'contact' && isNavExpanded
						? 'bg-white/20'
						: ''}"
				>
					<span
						class="text-xs font-medium text-white transition-opacity duration-300"
						class:opacity-0={!isNavExpanded}>Contact</span
					>
				</a>
			</div>
		</div>
	</div>
</div>

<svelte:window on:keydown={handleKeydown} />

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

	/* Ken Burns effect */
	.ken-burns-zoom {
		position: absolute;
		inset: -10%;
		background: inherit;
		background-size: 120% 120%;
		animation: kenBurns 20s ease-in-out infinite alternate;
	}

	@keyframes kenBurns {
		0% {
			transform: scale(1) translate(0, 0);
		}
		50% {
			transform: scale(1.1) translate(-2%, -2%);
		}
		100% {
			transform: scale(1.05) translate(2%, 2%);
		}
	}

	/* Ensure background images maintain quality during zoom */
	.ken-burns-zoom {
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
	}

	/* Soccer field navigation styles */
	.field-link {
		position: relative;
		overflow: hidden;
	}

	.field-link::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.field-link:hover::before {
		opacity: 1;
	}

	/* Navigation transitions */
	.nav-transition {
		transition: all 0.3s ease-in-out;
	}

	/* Ensure smooth width transition */
	.w-12 {
		width: 3rem;
	}
</style>
