<script>
import { createEventDispatcher } from "svelte";

    import { formatArtwork } from "./service/musikkit";
    const dispatch = createEventDispatcher();

    export let album;

    function artwork() {
        return album.attributes.artwork
            ? formatArtwork(album.attributes.artwork)
            : "";
    }

    function play(track) {
        dispatch("playTrack", track);
    }
</script>

<div class="album-thumb" style="background-image: url('{artwork()}');" />

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
    .container {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        background: #00ff00;
    }
    .album-thumb {
        width: 60px;
        height: 60px;
        background-size: cover;
        margin-right: 10px;
        border-radius: 6px;
    }
</style>
