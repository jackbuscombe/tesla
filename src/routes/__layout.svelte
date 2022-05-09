<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="w-full max-w-full overflow-hidden h-screen">
	<slot />
</main>

<style>
</style>
