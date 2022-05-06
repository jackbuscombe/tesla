<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="h-[100vh]">
	<!-- Content -->
	<Section
		title="Model 3"
		description="Order Online for Touchless Delivery"
		bgImage="bg-model-3"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="EXISTING INVENTORY"
		arrow
	/>
	<Section
		title="Solar and Powerwall"
		description="Rebates are now available in selected states on Powerwall and solar."
		bgImage="bg-solar-panel"
		leftBtnText="LEARN MORE"
		subTag="Rebates are now available in selected states on Powerwall and solar."
	/>
	<Section
		title="Model Y"
		description="Order Online for Touchless Delivery"
		bgImage="bg-model-y"
		leftBtnText="LEARN MORE"
		rightBtnText="STAY UPDATED"
	/>
	<Section
		title="Model S"
		description="Order Online for Touchless Delivery"
		bgImage="bg-model-s"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="LEARN MORE"
	/>
	<Section
		title="Model X"
		description="Order Online for Touchless Delivery"
		bgImage="bg-model-x"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="LEARN MORE"
	/>
	<Section
		title="Accessories"
		description="Order Online for Touchless Delivery"
		bgImage="bg-accessories"
		leftBtnText="SHOP NOW"
	/>
</section>
