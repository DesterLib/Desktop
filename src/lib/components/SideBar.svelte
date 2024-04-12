<script>
	import logo from '$lib/assets/logo.svg';
	import IconButton from './IconButton.svelte';
	import homeIcon from '$lib/icons/homeIcon.svelte';
	import browseIcon from '$lib/icons/browseIcon.svelte';
	import bookmarksIcon from '$lib/icons/bookmarksIcon.svelte';
</script>

<div class="w-[68px] h-full p-2 space-y-2">
	<div class="aspect-square flex justify-center items-center p-2">
		<img src={logo} alt="" />
	</div>
	<div class="space-y-2">
		<IconButton variant="nav" icon={homeIcon} />
		<IconButton variant="nav" icon={browseIcon} />
		<IconButton variant="nav" icon={bookmarksIcon} />
		<IconButton variant="nav" icon={browseIcon} />
	</div>
</div>
