<script lang="ts">
	import HCard from '$lib/components/HCard.svelte';
	import database from '$lib/db';
</script>

<main class="w-full">
	<section class="p-4 space-y-4">
		<div
			class="text-4xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient"
		>
			Weekly Recommendation
		</div>
		<div class="overflow-x-scroll w-full">
			<div class="w-fit flex space-x-2 pb-2">
				{#each database.weeklyRecommendations as item}
					<HCard cardInfo={item} />
				{/each}
			</div>
		</div>
	</section>
</main>
