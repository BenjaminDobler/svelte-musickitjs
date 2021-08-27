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

    function dragStart(event, track) {
        event.dataTransfer.setData("text/plain", JSON.stringify(track));
    }
</script>

<div class="song-list">
    {#each tracks as track}
        <div
            class="song-row"
            on:click={() => play(track)}
            draggable={true}
            on:dragstart={(event) => dragStart(event, track)}
        >
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
        font-size: 13px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.92);
    }

    .song-row {
        display: table-row;
        background: #232323;
        height: 46px;
        vertical-align: middle;
        align-items: center;
    }

    .song-row:nth-child(odd) {
        background: #1f1f1f;
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
