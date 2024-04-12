<script lang="ts">
	import Button from './Button.svelte';
	import playIcon from '../icons/playIcon.svelte';
	import bookmarkOIcon from '$lib/icons/bookmarkOIcon.svelte';
	export let cardInfo: any;
</script>

<div class="w-[600px] h-[300px] rounded-lg relative overflow-hidden">
	<div
		class="absolute w-full h-full flex flex-col justify-between bg-gradient-to-tr from-black to-transparent"
	>
		<div class="absolute p-4">
			<div class="text-xl text-white font-semibold">{cardInfo.title}</div>
			<div class="text-white/60">
				{cardInfo.year} | {cardInfo.type} | {cardInfo.language}
			</div>
		</div>
		<div class="absolute bottom-4 left-4 flex items-center space-x-2">
			<Button variant="primary" size="medium" icon={playIcon}>Play Now</Button>
			<Button variant="secondary" size="medium" icon={bookmarkOIcon}>Watchlist</Button>
		</div>
	</div>
	<img class="object-fill w-full h-full" src={cardInfo.image} alt="" />
</div>
