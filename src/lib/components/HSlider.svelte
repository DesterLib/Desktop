<script lang="ts">
	import HCard from '$lib/components/HCard.svelte';

	let slider: HTMLDivElement;

	let isDrag = false;

	const dragStart = () => (isDrag = true);
	const dragEnd = () => (isDrag = false);
	const drag = (ev: any) => isDrag && (slider.scrollLeft -= ev.movementX);

	export let sliderData: any;
	export let gradiantText = false;
</script>

<section class="p-4 space-y-4">
	{#if gradiantText}
		<div
			class="text-2xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient"
		>
			Weekly Recommendation
		</div>
	{:else}
		<div class="text-2xl font-semibold">Weekly Recommendation</div>
	{/if}

	<div
		bind:this={slider}
		on:pointerdown={dragStart}
		on:pointerup={dragEnd}
		on:pointermove={drag}
		on:blur={dragEnd}
		on:mouseleave={dragEnd}
		class="overflow-x-scroll w-full touch-none"
	>
		<div class="w-fit flex space-x-2 pb-2">
			{#each sliderData as item}
				<HCard cardInfo={item} />
			{/each}
		</div>
	</div>
</section>
