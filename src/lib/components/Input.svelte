<script lang="ts">
	export let icon: any;
	export let iconDisabled: boolean = true;
	export let placeholder: string;
	export let value: string = '';
</script>

<div class="relative w-full h-10 bg-[#252525]/60 rounded-lg overflow-hidden border border-white/20">
	{#if icon}
		<div
			class="absolute top-0 bottom-0 left-0 my-auto ml-2 h-5 w-5 flex justify-center items-center aspect-square {iconDisabled
				? 'text-[#A0A0A0]'
				: 'text-white'}"
		>
			<svelte:component this={icon} />
		</div>
	{/if}
	<input
		class="w-full h-full bg-transparent outline-none placeholder:text-[#A0A0A0] {icon
			? 'pl-8'
			: 'px-2'}"
		bind:value
		{placeholder}
		type="text"
	/>
</div>
