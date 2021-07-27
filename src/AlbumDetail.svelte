<script>
    import { createEventDispatcher } from "svelte";
    import CoverImage from "./components/CoverImage.svelte";
import { formatMediaTime } from "./service/musikkit";

    const dispatch = createEventDispatcher();

    export let album;

    function play(track) {
        dispatch("playTrack", track);
    }

    function formatMilliseconds(ms) {
        return formatMediaTime(ms/1000)
    }
</script>

<section>
    <CoverImage artwork={album.attributes.artwork} width="270px" height="270px" />
    Artist name: {album?.attributes?.artistName}

    Tracks {album.relationships.tracks.data.length}

    <div class="song-list">
        {#each album.relationships.tracks.data as track}
            <div class="song-row" on:click={() => play(track)}>
                <div class="song-list-something song-list-cell" />
                <div class="song-list-index song-list-cell">
                    {track.attributes.trackNumber}
                </div>
                <div class="song-list-name song-list-cell">
                    {track.attributes.name}
                </div>
                <div class="song-list-time song-list-cell">
                    {formatMilliseconds(track.attributes.durationInMillis)}
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    section {
        padding: 30px;
        padding-top: 60px;
    }

    .song-list {
        display: table;
        width: 100%;
    }

    .song-row {
        display: table-row;
        background: #392f2f;
        height: 46px;
        vertical-align: middle;
        align-items: center;
        color: #e2d8d8;
    }

    .song-row:nth-child(odd) {
        background: #352b2b;
    }

    .song-list-name {
        width: 100%;
    }

    .song-list-cell {
        display: table-cell;
        padding-left: 5px;
        padding-right: 5px;
        vertical-align: middle;
    }
</style>
