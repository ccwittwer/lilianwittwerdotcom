<script lang="ts">
	import { schoolColors } from '$lib/config/colors';

	// Use BGA colors
	$: colors = schoolColors.bga || schoolColors.default;

	// Update CSS variables when colors change
	$: {
		if (typeof document !== 'undefined') {
			document.documentElement.style.setProperty('--color-primary', colors.primary);
			document.documentElement.style.setProperty('--color-secondary', colors.secondary);
			document.documentElement.style.setProperty('--color-tertiary', colors.tertiary);
		}
	}
</script>

<svelte:head>
	<title>Battle Ground Academy - Preparing for Excellence</title>
	<meta
		name="description"
		content="How Battle Ground Academy prepares student-athletes like Lilian Wittwer for college success"
	/>
</svelte:head>

<main class="bg-primary min-h-screen text-white">
	<!-- Back Button -->
	<button
		on:click={() => window.history.back()}
		class="fixed top-4 left-4 z-50 flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
	>
		<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 19l-7-7m0 0l7-7m-7 7h18"
			/>
		</svg>
		Back
	</button>

	<!-- Hero Section -->
	<section class="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden">
		<div class="absolute inset-0 z-0">
			<img
				src="/BGA_logo-seal-white.svg"
				alt="BGA Logo"
				class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20"
			/>
		</div>
		<div class="relative z-10 mx-auto w-full max-w-4xl px-4 text-center">
			<h1 class="mb-4 text-4xl font-bold md:text-6xl">BGA Soccer Program</h1>
			<p class="text-xl text-white/80 md:text-2xl">
				Developing Student-Athletes for College Success
			</p>
		</div>
	</section>

	<!-- Program Overview Section -->
	<section class="relative border-t border-white/10 py-16">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="text-secondary mb-8 text-3xl font-bold">Program Overview</h2>
			<div class="prose prose-invert max-w-none">
				<p class="text-lg">
					The BGA soccer program has been instrumental in Lilian's development as a student-athlete.
					The program's comprehensive approach combines high-level soccer training with academic
					excellence, creating an environment where players can thrive both on and off the field.
				</p>
				<p class="text-lg">
					Through daily training sessions, competitive matches, and specialized development
					programs, players receive the preparation needed for collegiate soccer. The program's
					emphasis on technical skills, tactical understanding, and physical conditioning mirrors
					the demands of college-level competition.
				</p>
			</div>
		</div>
	</section>

	<!-- Coach Profile Section -->
	<section class="relative border-t border-white/10 py-16">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="text-secondary mb-8 text-3xl font-bold">Leadership</h2>
			<div class="prose prose-invert max-w-none">
				<div class="border-secondary/20 mt-8 rounded-lg border bg-white/5 p-6">
					<h3 class="text-secondary mb-4 text-2xl font-semibold">Head Coach Jan Morrissey</h3>
					<p class="mb-4">
						Under Coach Morrissey's leadership, the program has achieved remarkable success. In
						2020, she was named the United Soccer Coaches National High School Coach of the Year for
						Private/Parochial Schools, recognizing her outstanding contributions to the sport.
					</p>
					<ul class="space-y-2">
						<li class="flex items-start">
							<svg
								class="text-secondary mt-1 mr-2 h-5 w-5 flex-shrink-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>Led the team to seven state championship appearances and four state titles</span
							>
						</li>
						<li class="flex items-start">
							<svg
								class="text-secondary mt-1 mr-2 h-5 w-5 flex-shrink-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>Achieved an impressive career record of 208-105-39 over 18 seasons</span>
						</li>
						<li class="flex items-start">
							<svg
								class="text-secondary mt-1 mr-2 h-5 w-5 flex-shrink-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span
								>Developed numerous players who have gone on to successful collegiate careers</span
							>
						</li>
					</ul>
					<p class="mt-4 text-sm text-white/70">
						<a
							href="https://unitedsoccercoaches.org/united-soccer-coaches-announces-national-high-school-coaches-of-the-year/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-secondary hover:text-secondary/80 underline"
						>
							Read the full announcement from United Soccer Coaches
						</a>
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Development Focus Section -->
	<section class="relative border-t border-white/10 py-16">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="text-secondary mb-8 text-3xl font-bold">College Preparation</h2>
			<div class="prose prose-invert max-w-none">
				<p class="text-lg">
					The program's structure is specifically designed to prepare players for the demands of
					collegiate soccer. Through a combination of technical training, tactical development, and
					physical conditioning, players develop the skills and mindset needed for success at the
					next level.
				</p>
				<ul class="mt-4 space-y-4">
					<li class="flex items-start">
						<svg
							class="text-secondary mt-1 mr-2 h-5 w-5 flex-shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<span
							>Year-round training program that mirrors collegiate intensity and expectations</span
						>
					</li>
					<li class="flex items-start">
						<svg
							class="text-secondary mt-1 mr-2 h-5 w-5 flex-shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<span>Exposure to college coaches through competitive tournaments and showcases</span>
					</li>
					<li class="flex items-start">
						<svg
							class="text-secondary mt-1 mr-2 h-5 w-5 flex-shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<span>Strength and conditioning program designed for college-level performance</span>
					</li>
					<li class="flex items-start">
						<svg
							class="text-secondary mt-1 mr-2 h-5 w-5 flex-shrink-0"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<span>Academic-athletic balance training for college success</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Success Stories Section -->
	<section class="relative border-t border-white/10 py-16">
		<div class="mx-auto max-w-4xl px-4">
			<h2 class="text-secondary mb-8 text-3xl font-bold">Impact on Development</h2>
			<div class="prose prose-invert max-w-none">
				<p class="text-lg">
					The BGA soccer program has played a crucial role in Lilian's development as a player and
					student. The combination of high-level competition, expert coaching, and academic support
					has created an environment where she can excel both on the field and in the classroom.
				</p>
				<p class="text-lg">
					Through the program's comprehensive approach to player development, Lilian has been able
					to refine her technical skills, enhance her tactical understanding, and develop the
					physical attributes needed for collegiate soccer. The program's emphasis on academic
					excellence has also helped prepare her for the demands of college-level coursework.
				</p>
			</div>
		</div>
	</section>
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.prose {
		max-width: 65ch;
	}

	.prose p {
		margin-top: 1.25em;
		margin-bottom: 1.25em;
	}

	.prose ul {
		margin-top: 1.25em;
		margin-bottom: 1.25em;
		list-style-type: none;
	}

	.prose li {
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
</style>
