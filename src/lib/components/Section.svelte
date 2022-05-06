<script lang="ts">
	import { Icon, ChevronDown } from 'svelte-hero-icons';
	export let title: string;
	export let description: string | boolean = false;
	export let bgImage: string;
	export let leftBtnText: string;
	export let rightBtnText: string | boolean = false;
	export let subTag: string | boolean = false;
	export let arrow: boolean = false;
</script>

<div
	class={`flex flex-col items-center w-full h-full ${bgImage} relative bg-cover bg-center bg-no-repeat justify-between`}
>
	<div class="pt-[12vh] text-center text-3xl space-y-4 text-black">
		<h2 class="font-bold text-6xl">{title}</h2>
		{#if description}
			<h3 class="text-2xl font-light">
				{description}
			</h3>
		{/if}
	</div>
	<div class="flex flex-col items-center w-full">
		<div class="flex flex-col lg:flex-row lg:space-x-4 mb-16">
			<button class="bg-gray-800 w-64 py-3 my-1 rounded-full text-white text-xl opacity-80">
				{leftBtnText}
			</button>
			{#if rightBtnText}
				<button class="bg-gray-200 w-64 py-3 my-1 rounded-full text-gray-800 text-xl opacity-80">
					{rightBtnText}
				</button>
			{/if}
		</div>
		{#if subTag}
			<p class="text-white text-lg mb-12">{subTag}</p>
		{/if}
		{#if arrow}
			<Icon src={ChevronDown} class="h-12 w-12 text-white animate-bounce mb-2" />
		{/if}
	</div>
</div>
