<script>
    import { createEventDispatcher } from "svelte";
    import CoverImage from "./components/CoverImage.svelte";

    const dispatch = createEventDispatcher();

    export let album;

    function play(track) {
        dispatch("playTrack", track);
    }
</script>

<CoverImage artwork={album.attributes.artwork} width={60} height={60} />
Artist name: {album?.attributes?.artistName}

Tracks {album.relationships.tracks.data.length}

<ul>
    {#each album.relationships.tracks.data as track}
        <li>
            {track.attributes.name}
            <button on:click={() => play(track)}>Play</button>
        </li>
    {/each}
</ul>

<style>
</style>
