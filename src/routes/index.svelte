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

<section class="relative">
	<Section
		title="Model 3"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('./static/model-3.jpg')]"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="EXISTING INVENTORY"
		arrow
	/>
	<Section
		title="Solar and Powerwall"
		description="Rebates are now available in selected states on Powerwall and solar."
		bgImage="bg-[url('./static/solar-panel.jpg')]"
		leftBtnText="LEARN MORE"
		subTag="Rebates are now available in selected states on Powerwall and solar."
	/>
	<Section
		title="Model Y"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('./static/model-y.jpg')]"
		leftBtnText="LEARN MORE"
		rightBtnText="STAY UPDATED"
	/>
	<Section
		title="Model S"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('./static/model-s.jpg')]"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="LEARN MORE"
	/>
	<Section
		title="Model X"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('./static/model-x.jpg')]"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="LEARN MORE"
	/>
	<Section
		title="Accessories"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('./static/accessories.jpg')]"
		leftBtnText="SHOP NOW"
	/>
</section>
