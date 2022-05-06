<script lang="ts">
	import { Icon, Menu } from 'svelte-hero-icons';
</script>

<header class="sticky top-0 flex justify-between bg-transparent p-8 items-center text-2xl z-50">
	<div>
		<img src="../../../static/logo.svg" alt="" />
	</div>
	<div class="hidden lg:flex space-x-6 items-center">
		<p>MODEL S</p>
		<p>MODEL 3</p>
		<p>MODEL X</p>
		<p>MODEL Y</p>
	</div>

	<div class="flex space-x-6 items-center">
		<p>SHOP</p>
		<p>TESLA ACCOUNT</p>
		<Icon src={Menu} class="h-12 w-12 cursor-pointer" />
	</div>
</header>
