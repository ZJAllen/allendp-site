<script>
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import moment from 'moment';

	export const baseURL = `${import.meta.env.VITE_SITE_URL}/contact`;
	export const formEnd = import.meta.env.VITE_FORM_URL_ENDING;
	export let submit = $page.query.get('submit');

	console.log(baseURL);
</script>

<Nav pageTitle="Contact">
	<div slot="content">
		{#if submit}
			<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div class="text-center">
					<p
						class="mt-1 text-4xl font-extrabold text-zinc-900 dark:text-zinc-300 sm:text-5xl sm:tracking-tight lg:text-6xl"
					>
						Thanks for your message!
					</p>
					<p class="max-w-xl mt-5 mx-auto text-xl text-zinc-500 dark:text-zinc-400">
						We will respond to you as quickly as possible.
					</p>
					<div class="mt-8 inline-flex rounded-md shadow">
						<a
							sveltekit:prefetch
							href="/"
							class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white dark:text-zinc-100 bg-zinc-600 dark:bg-zinc-500 hover:bg-zinc-700 dark:hover:bg-zinc-400"
						>
							Return to Home
						</a>
					</div>
				</div>
			</div>
		{:else}
			<div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
				<div class="py-8 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12">
					<div class="max-w-lg mx-auto">
						<h2
							class="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-300 sm:text-3xl"
						>
							Get in touch
						</h2>
						<p class="mt-3 text-lg leading-6 text-zinc-500 dark:text-zinc-300">
							Do you have a project or just want to say hi? Drop a note in the form or send an
							email!
						</p>
						<dl class="mt-8 text-base text-zinc-500 dark:text-zinc-300">
							<div>
								<dt class="sr-only">Office Location</dt>
								<dd>
									<p>Columbus, Ohio</p>
								</dd>
							</div>

							<div class="mt-3">
								<dt class="sr-only">Email</dt>
								<dd class="flex">
									<!-- Heroicon name: outline/mail -->
									<svg
										class="flex-shrink-0 h-6 w-6 text-zinc-400 dark:text-zinc-300"
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
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<a href="mailto:info@allendp.com" class="ml-3"> info@allendp.com </a>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<div
					class="bg-white dark:bg-zinc-600 py-8 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12 rounded-md"
				>
					<div class="max-w-lg mx-auto lg:max-w-none">
						<form
							action={`https://formsubmit.co/${formEnd}`}
							method="POST"
							class="grid grid-cols-1 gap-y-6"
						>
							<input
								type="hidden"
								name="_subject"
								value={`New submission! ${moment().format('MM/DD/YY @ h:mma')}`}
							/>
							<input type="hidden" name="_template" value="table" />
							<input type="hidden" name="_next" value={`${baseURL}?submit=true`} />
							<div>
								<label for="full-name" class="sr-only">Full name</label>
								<input
									type="text"
									name="full-name"
									id="full-name"
									autocomplete="name"
									autocapitalize="words"
									class="block w-full shadow-sm py-3 px-4 dark:bg-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-300 focus:ring-zinc-500 dark:focus:ring-zinc-300 dark:text-zinc-100 focus:border-zinc-500 dark:border:ring-zinc-300 border-zinc-300 dark:border-zinc-500 rounded-md"
									placeholder="Full name"
									required
								/>
							</div>
							<div>
								<label for="email" class="sr-only">Email</label>
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									class="block w-full shadow-sm py-3 px-4 dark:bg-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-300 focus:ring-zinc-500 dark:focus:ring-zinc-300 dark:text-zinc-100 focus:border-zinc-500 dark:border:ring-zinc-300 border-zinc-300 dark:border-zinc-500 rounded-md"
									placeholder="Email"
									required
								/>
							</div>
							<div>
								<label for="phone" class="sr-only">Phone</label>
								<input
									type="text"
									name="phone"
									id="phone"
									autocomplete="tel"
									class="block w-full shadow-sm py-3 px-4 dark:bg-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-300 focus:ring-zinc-500 dark:focus:ring-zinc-300 dark:text-zinc-100 focus:border-zinc-500 dark:border:ring-zinc-300 border-zinc-300 dark:border-zinc-500 rounded-md"
									placeholder="Phone"
								/>
							</div>
							<div>
								<label for="message" class="sr-only">Message</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									class="block w-full shadow-sm py-3 px-4 dark:bg-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-300 focus:ring-zinc-500 dark:focus:ring-zinc-300 dark:text-zinc-100 focus:border-zinc-500 dark:border:ring-zinc-300 border-zinc-300 dark:border-zinc-500 rounded-md"
									placeholder="Message"
									required
								/>
							</div>
							<div>
								<button
									type="submit"
									class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white dark:text-zinc-700 bg-zinc-600 dark:bg-zinc-300 hover:bg-zinc-700 dark:hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		{/if}
	</div>
</Nav>
