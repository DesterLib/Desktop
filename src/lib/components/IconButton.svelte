<script lang="ts">
	import { cva } from 'class-variance-authority';
	import type { VariantProps } from 'class-variance-authority';

	export let variant: ButtonProps['variant'];
	export let size: ButtonProps['size'];
	export let icon: any;

	type ButtonProps = VariantProps<typeof buttonStyles>;

	const buttonStyles = cva(
		[
			'rounded-lg',
			'w-full',
			'h-full',
			'font-semibold',
			'flex',
			'justify-center',
			'items-center',
			'aspect-square',
			'transition-colors',
			'ease-out'
		],
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
					],
					nav: [
						'bg-transparent',
						'hover:bg-white',
						'hover:text-black',
						'text-white',
						'active:bg-zinc-400'
					]
				},
				size: {
					medium: ['p-3']
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
	<svelte:component this={icon} />
</button>
