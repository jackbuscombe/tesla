<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Tesla</title>
	<meta name="description" content="Tesla Demo Website" />
</svelte:head>

<section class="overflow-y-scroll h-screen snap-mandatory snap-y">
	<Section
		title="Model 3"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('/static/model-3.jpg')]"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="EXISTING INVENTORY"
		arrow
	/>
	<Section
		title="Solar Panels"
		description="Lowest Cost Solar Panels in America"
		bgImage="bg-[url('/static/solar-panel.jpg')]"
		leftBtnText="LEARN MORE"
		subTag="Rebates are now available in selected states on Powerwall and solar."
	/>
	<Section
		title="Model Y"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('/static/model-y.jpg')]"
		leftBtnText="LEARN MORE"
		rightBtnText="STAY UPDATED"
	/>
	<Section
		title="Model S"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('/static/model-s.jpg')]"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="LEARN MORE"
	/>
	<Section
		title="Model X"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('/static/model-x.jpg')]"
		leftBtnText="CUSTOM ORDER"
		rightBtnText="LEARN MORE"
	/>
	<Section
		title="Solar Roof"
		description="Produce Clean Energy From Your Roof"
		bgImage="bg-[url('/static/solar-roof.jpg')]"
		leftBtnText="ORDER NOW"
		rightBtnText="LEARN MORE"
	/>
	<Section
		title="Accessories"
		description="Order Online for Touchless Delivery"
		bgImage="bg-[url('/static/accessories.jpg')]"
		leftBtnText="SHOP NOW"
	/>
	<Footer />
</section>
