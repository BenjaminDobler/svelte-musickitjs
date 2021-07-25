<script>
    import { createEventDispatcher } from "svelte";
    import CoverImage from "./components/CoverImage.svelte";

    const dispatch = createEventDispatcher();

    export let album;

    function play(track) {
        dispatch("playTrack", track);
    }
</script>

<section>
    <CoverImage artwork={album.attributes.artwork} width={120} height={120} />
    Artist name: {album?.attributes?.artistName}

    Tracks {album.relationships.tracks.data.length}

    <div class="song-list">
        {#each album.relationships.tracks.data as track}
            <div class="song-list-row" >
                <div>0</div>
                <div>{track.attributes.name}</div>
                <div>0:30</div>
            </div>
        {/each}
    </div>
    <ul>
        {#each album.relationships.tracks.data as track}
            <li>
                {track.attributes.name}
                <button on:click={() => play(track)}>Play</button>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        padding-top: 60px;
    }

    .song-list-row {
        display: grid;
        grid-template-areas: "song-artwork song-rank song-icon song-name";
        grid-template-columns: auto auto auto 1fr;
        align-items: center;
        height: 46px;
        -webkit-padding-start: 7px;
        padding-inline-start: 7px;
    }
</style>
