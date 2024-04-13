<script lang="ts">
	import database from '$lib/db';
	import HSlider from '$lib/components/HSlider.svelte';
</script>

<main class="w-full">
	<HSlider sliderData={database.weeklyRecommendations} gradiantText={true} />
</main>
