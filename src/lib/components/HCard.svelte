<script lang="ts">
	import Button from './Button.svelte';
	import playIcon from '../icons/playIcon.svelte';
	import bookmarkOIcon from '$lib/icons/bookmarkOIcon.svelte';
	export let cardInfo: any;
</script>

<div
	class="w-[400px] h-[220px] rounded-lg relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
>
	<div
		class="absolute w-full h-full flex flex-col justify-between bg-gradient-to-tr from-black to-transparent"
	>
		<div class="absolute p-2">
			<div class="text-white font-semibold">{cardInfo.title}</div>
			<div class="text-white/60 text-sm">
				{cardInfo.year} | {cardInfo.type} | {cardInfo.language}
			</div>
		</div>
		<div class="absolute p-2 bottom-0 flex items-center space-x-2">
			<Button variant="primary" size="medium" icon={playIcon}>Play Now</Button>
			<Button variant="secondary" size="medium" icon={bookmarkOIcon}>Watchlist</Button>
		</div>
	</div>
	<img class="object-fill w-full h-full" src={cardInfo.image} alt="" />
</div>
