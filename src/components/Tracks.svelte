<script>
    import { addToPlaylist, formatMediaTime } from "../service/musikkit";
    import CoverImage from "./CoverImage.svelte";

    export let tracks = [];
    export let showArtwork = false;

    function play(track) {
        addToPlaylist(track);
    }

    function formatMilliseconds(ms) {
        return formatMediaTime(ms / 1000);
    }
</script>

<div class="song-list">
    {#each tracks as track}
        <div class="song-row" on:click={() => play(track)}>
            <div class="song-list-something song-list-cell" />
            {#if showArtwork}
                <div class="song-list-something song-list-cell">
                    <CoverImage
                        artwork={track.attributes.artwork}
                        width="40px"
                        height="40px"
                    />
                </div>
            {/if}

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

<style>
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
