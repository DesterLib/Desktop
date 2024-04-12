<script lang="ts">
	import { cva } from 'class-variance-authority';
	import type { VariantProps } from 'class-variance-authority';

	export let variant: ButtonProps['variant'];
	export let size: ButtonProps['size'];
	export let icon: any;

	type ButtonProps = VariantProps<typeof buttonStyles>;

	const buttonStyles = cva(
		['rounded-lg', 'w-fit', 'font-semibold', 'flex', 'justify-center', 'items-center'],
		{
			variants: {
				variant: {
					primary: ['bg-white', 'hover:bg-zinc-200', 'active:bg-zinc-400', 'text-black'],
					secondary: [
						'hover:bg-white/20',
						'active:bg-white/40',
						'text-white',
						'backdrop-blur-lg',
						'border',
						'border-white/20'
					]
				},
				size: {
					medium: ['text-base', 'py-2', 'px-4']
				}
			},
			defaultVariants: {
				variant: 'primary',
				size: 'medium'
			}
		}
	);
</script>

<button class={buttonStyles({ variant, size })}>
	{#if icon}
		<div class="mr-2 h-5 w-5 flex justify-center items-center aspect-square">
			<svelte:component this={icon} />
		</div>
	{/if}
	<div><slot /></div>
</button>
