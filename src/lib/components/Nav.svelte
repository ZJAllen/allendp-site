<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { navLinks } from './navLinks';
	import Footer from '$lib/components/Footer.svelte';

	export let pageTitle;

	export let visible = false;
	let mobileMenu = null;

	const toggleVisible = () => {
		visible = !visible;
	};

	onMount(() => {
		const handleOutsideClick = (event) => {
			if (visible && !mobileMenu.contains(event.target)) {
				visible = false;
			}
		};

		const handleEscape = (event) => {
			if (visible && event.key === 'Escape') {
				visible = false;
			}
		};

		// add events when element is added to the DOM
		document.addEventListener('click', handleOutsideClick, false);
		document.addEventListener('keyup', handleEscape, false);

		// remove events when element is removed from the DOM
		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
			document.removeEventListener('keyup', handleEscape, false);
		};
	});
</script>

<svelte:head>
	<title>{pageTitle} - Allen Design & Prototype</title>
</svelte:head>
<div>
	<nav class="bg-zinc-100 dark:bg-zinc-800">
		<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex-shrink-0">
					<a sveltekit:prefetch href="/"
						><svg
							class="h-10 w-10 text-zinc-900 fill-zinc-900 dark:text-zinc-100 dark:fill-zinc-100"
							stroke="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 523 523"
						>
							<circle
								cx="261.5"
								cy="261.5"
								r="252.5"
								fill="none"
								stroke-width="18"
								stroke-miterlimit="10"
							/>
							<path
								d="M484.1551,287.2247l-87.81,54.0457-87.81-54.0457L198.4027,355.0089l110.1318,67.7842,87.81-54.0457,87.81,54.0457L594.287,355.0089ZM308.5345,395.3161l-65.4887-40.3072,65.4887-40.3072,65.4888,40.3072Zm110.1319-40.3072,65.4887-40.3072,65.4888,40.3072-65.4888,40.3072Z"
								transform="translate(-134.8448 -44.2931)"
								stroke-width="0"
							/>
							<path
								d="M396.3448,188.7931l-234,144.0228,22.3216,13.7386,123.8681-76.2387,87.81,54.0457,87.81-54.0457,123.8682,76.2387,22.3215-13.7386Zm0,108.0914-65.4887-40.3072L396.3448,216.27l65.4888,40.3072Z"
								transform="translate(-134.8448 -44.2931)"
								stroke-width="0"
							/>
						</svg>
					</a>
				</div>

				<div class="hidden space-x-10 md:flex md:ml-10">
					{#each navLinks as navItem}
						<a
							sveltekit:prefetch
							href={navItem.link}
							class="{'/' + $page.path.split('/')[1] === navItem.link
								? 'bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100'
								: 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-500 dark:hover:bg-zinc-700 hover:text-zinc-200 dark:hover:text-zinc-100'} px-3 py-2 rounded-md text-sm font-medium"
							aria-current="page">{navItem.title}</a
						>
					{/each}
				</div>
				<div class="hidden md:flex md:items-center md:space-x-6">
					<a
						sveltekit:prefetch
						href="/contact"
						class="py-2 px-6 bg-zinc-100 dark:bg-zinc-500 border border-transparent rounded-md shadow-md dark:shadow-zinc-700 text-base font-medium text-zinc-600 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-400"
					>
						Contact
					</a>
				</div>

				<div class="-mr-2 flex md:hidden" bind:this={mobileMenu}>
					<button
						type="button"
						class="bg-zinc-100 dark:bg-zinc-800 inline-flex items-center justify-center p-2 rounded-md text-zinc-700 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
						on:click={toggleVisible}
					>
						<span class="sr-only">Open main menu</span>

						<svg
							class="{visible ? 'hidden' : 'show'} h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>

						<svg
							class="{visible ? 'block' : 'hidden'} h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		{#if visible}
			<div class="md:hidden" id="mobile-menu">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<!-- Current: "bg-zinc-900 text-white", Default: "text-zinc-300 hover:bg-zinc-700 hover:text-white" -->
					{#each navLinks as navItem}
						<a
							sveltekit:prefetch
							href={navItem.link}
							class="{'/' + $page.path.split('/')[1] === navItem.link
								? 'bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100'
								: 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-500 dark:hover:bg-zinc-700 hover:text-zinc-200 dark:hover:text-zinc-100'} block px-3 py-2 rounded-md text-base font-medium"
							aria-current="page"
						>
							{navItem.title}
						</a>
					{/each}
					<div class="mt-6 px-5">
						<a
							sveltekit:prefetch
							href="/contact"
							class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-zinc-600 dark:bg-zinc-500 text-white dark:text-zinc-200 font-medium hover:bg-zinc-700 dark:hover:bg-zinc-400"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>

	<main class="bg-zinc-100 dark:bg-zinc-800 min-h-[700px]">
		<div class="max-w-5xl mx-auto py-6 px-2 sm:px-6 lg:px-8 ">
			<slot name="content" />
		</div>
	</main>

	<Footer />
</div>
