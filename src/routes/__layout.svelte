<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<!-- <Header /> -->

<main class="w-full">
	<slot />
</main>

<style>
	* {
		/* font-family: 'Rubik', 'sans-serif'; */
		box-sizing: border-box;
		color: #393c41;
		margin: 0;
		padding: 0;
	}
</style>
