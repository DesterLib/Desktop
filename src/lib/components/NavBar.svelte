<script>
	import Input from './Input.svelte';
	import searchIcon from '../icons/searchIcon.svelte';
</script>

<div class="h-[68px] p-4 w-full flex items-center justify-between">
	<div class="text-4xl font-bold">Home</div>
	<div class="w-[400px]"><Input icon={searchIcon} placeholder="Search..." /></div>
	<div class="h-full aspect-square border border-white/20 rounded-full">
		<img
			class="object-cover w-full h-full rounded-full"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXM3-B13BV6qAmRklMrE_n4DLgE7JhogNT37LmHOz7rw&s"
			alt=""
		/>
	</div>
</div>
