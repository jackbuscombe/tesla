<script lang="ts">
	import { Icon, ChevronDown } from 'svelte-hero-icons';
	import { fade, fly } from 'svelte/transition';
	import IntersectionObserver from 'svelte-intersection-observer';

	let top: any;
	let topVisible: any;
	let bottom: any;
	let bottomVisible: any;

	export let title: string;
	export let description: string | boolean = false;
	export let bgImage: string;
	export let leftBtnText: string;
	export let rightBtnText: string | boolean = false;
	export let subTag: string | boolean = false;
	export let arrow: boolean = false;
</script>

<div
	class={`flex relative flex-col items-center w-full h-[100vh] ${bgImage} relative bg-cover bg-center bg-no-repeat`}
>
	<!-- <IntersectionObserver once element={top} bind:intersecting={topVisible} threshold={0.5}>
		<div bind:this={top} />
	</IntersectionObserver> -->
	<!-- {#if topVisible} -->
	<div
		transition:fly={{ y: 200, duration: 2000 }}
		class="absolute top-[15%] text-center space-y-4 text-black"
	>
		<h2 class="font-bold text-4xl lg:text-5xl">{title}</h2>
		{#if description}
			<h3 class="text lg:text-lg font-light">
				{description}
			</h3>
		{/if}
	</div>
	<!-- {/if} -->
	<!-- <IntersectionObserver once element={top} bind:intersecting={bottomVisible} threshold={0.5}> -->
	<div class={`absolute bottom-[10%] flex flex-col items-center w-2/3 mx-auto`}>
		<!-- bind:this={bottom} -->
		<!-- {#if bottomVisible} -->
		<div
			transition:fade
			class={`flex flex-col lg:flex-row lg:space-x-8 ${subTag && 'mb-4'} ${arrow && 'mb-4'}`}
		>
			<button
				class="bg-gray-900 w-64 py-2 my-1 text-sm font-semibold rounded-full text-white opacity-80 transition duration-100 ease-in hover:opacity-100"
			>
				{leftBtnText}
			</button>
			{#if rightBtnText}
				<button
					class="bg-gray-200 w-64 py-2 my-1 text-sm font-semibold rounded-full text-gray-800 opacity-80 transition duration-100 ease-in hover:opacity-100"
				>
					{rightBtnText}
				</button>
			{/if}
		</div>
		{#if subTag}
			<p class="text-white mb-2 max-w-screen-sm text-center">{subTag}</p>
		{/if}
		<!-- {/if} -->
	</div>
	{#if arrow}
		<Icon src={ChevronDown} class="absolute bottom-2 h-12 w-12 text-black animate-bounce" />
	{/if}
	<!-- </IntersectionObserver> -->
</div>
