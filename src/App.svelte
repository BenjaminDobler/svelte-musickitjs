<script lang="ts">
	import Router from "svelte-spa-router";
	import { onMount } from "svelte";
	import { store } from "./store/musicstore";
	import { addToPlaylist, loadAlbum, loadAlbums, loadPlaylists } from "./service/musikkit";
	import Header from "./components/Header.svelte";
	import Navigation from "./components/Navigation.svelte";
	import { routes } from "./routes/routes";

	onMount(async () => {
		await loadAlbums();
		await loadPlaylists();
	});

	function albumSelected(event) {
		loadAlbum(event.detail.id);
	}

	function playTrack(event) {
		addToPlaylist(event.detail);
	}

	$: console.log("Selected album changed: ", $store.selectedAlbum);
	$: console.log("Tracks: ", $store.selectedAlbum?.relationships.tracks);
</script>

<svelte:head>
	<script
		src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>
</svelte:head>

<Header />
<Navigation />
<div class="main-content">
	<Router {routes} />
</div>

<style>
	:global(body) {
		position: relative;
		margin: 0;
		padding: 0;
		background: #1f1f1f;
		color: #e2d8d8;

		--primaryColor: #fa2d48;
		--playerBackground: rgb(45 45 45 / 88%);
		font-family: -apple-system,BlinkMacSystemFont,"Apple Color Emoji","SF Pro","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
	}

	.main-content {
		position: absolute;
		left: 260px;
		top: 0;
		right: 0;
		bottom: 0;
	}
</style>
