<script lang="ts">
	import { onMount } from "svelte";
	import AlbumDetail from "./AlbumDetail.svelte";

	import Albums from "./Albums.svelte";
	import Player from "./components/player/Player.svelte";
	import { store } from "./store/musicstore";
	import { addToPlaylist, loadAlbum, loadAlbums } from "./service/musikkit";

	onMount(async () => {
		await loadAlbums();
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

<main>
	<script
		src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>

	<Player />

	{#if $store.selectedView === "albums"}
		<Albums albums={$store.albums} on:album={albumSelected} />
	{/if}

	{#if $store.selectedView === "album"}
		<button
			on:click={() =>
				store.update((data) => ({ ...data, selectedView: "albums" }))}
			>Back</button
		>
		<AlbumDetail album={$store.selectedAlbum} on:playTrack={playTrack} />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
