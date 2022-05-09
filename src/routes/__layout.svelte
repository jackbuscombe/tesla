<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="w-full max-w-full">
	<slot />
</main>

<Footer />
