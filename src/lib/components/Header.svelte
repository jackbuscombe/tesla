<script lang="ts">
	import { Icon, Menu, GlobeAlt, X } from 'svelte-hero-icons';
	import { fly } from 'svelte/transition';
	let isMenuOpen: boolean = false;
	import Logo from '../../../static/logo.svg';
</script>

<header
	class="fixed top-0 w-full min-h-[60px] grid grid-cols-3 justify-between bg-transparent p-8 items-center font-semibold text-xl z-50"
>
	<div class="flex justify-center col-span-1 items-center">
		<a class="cursor-pointer items-center" href="/">
			<img src={Logo} alt="" class="w-36 h-6" />
		</a>
	</div>
	<div
		class="hidden xl:flex space-x-6 items-center flex-nowrap flex-1 justify-center xl:col-span-1"
	>
		<a href="/">Model S</a>
		<a href="/">Model 3</a>
		<a href="/">Model X</a>
		<a href="/">Model Y</a>
	</div>

	<div class="flex space-x-6 items-center justify-end xl:justify-center col-span-2 xl:col-span-1">
		<a href="/">Shop</a>
		<a href="/">Tesla Account</a>
		<div on:click={() => (isMenuOpen = true)}>
			<Icon src={Menu} class="h-8 w-8 cursor-pointer" />
		</div>
	</div>

	{#if isMenuOpen}
		<div
			transition:fly={{ x: window.innerWidth, duration: 600 }}
			class="fixed top-0 bottom-0 right-0 bg-white w-[350px] z-50 text-gray-600 overflow-y-scroll scrollbar-hide list-none p-8 flex flex-col"
		>
			<div
				on:click={() => (isMenuOpen = false)}
				class="self-end p-4 rounded-full hover:bg-gray-300 transition duration-200 ease-in-out cursor-pointer"
			>
				<Icon src={X} class="h-8 w-8" />
			</div>
			<li class="menuitem"><a href="/">Existing Inventory</a></li>
			<li class="menuitem"><a href="/">Used Inventory</a></li>
			<li class="menuitem"><a href="/">Trade-In</a></li>
			<li class="menuitem"><a href="/">Test Drive</a></li>
			<li class="menuitem"><a href="/">Roadster</a></li>
			<li class="menuitem"><a href="/">Commercial Energy</a></li>
			<li class="menuitem"><a href="/">Utilities</a></li>
			<li class="menuitem"><a href="/">Energy</a></li>
			<li class="menuitem"><a href="/">Corporate</a></li>
			<li class="menuitem"><a href="/">Charging</a></li>
			<li class="menuitem"><a href="/">Find Us</a></li>
			<li class="menuitem"><a href="/">Events</a></li>
			<li class="menuitem"><a href="/">Support</a></li>
			<li class="menuitem"><a href="/">Investor Relations</a></li>
			<div class="menuitem flex">
				<Icon src={GlobeAlt} class="h-6 w-6 mr-2 mt-1" />
				<div>
					<p>Australia</p>
					<p class="text-gray-400 text-base">English</p>
				</div>
			</div>
		</div>
	{/if}
</header>
