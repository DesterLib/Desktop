<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import SideBar from '$lib/components/SideBar.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<div class="h-screen w-full">
		<div class="flex">
			<SideBar />
			<div class="w-[calc(100%-68px)]">
				<NavBar />
				<div class="w-full h-full"><slot /></div>
			</div>
		</div>
	</div>
{/if}
