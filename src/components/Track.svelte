<script>
    import { addToPlaylist, formatMediaTime } from "../service/musikkit";

    import CoverImage from "./CoverImage.svelte";

    export let track;
    export let showArtwork = false;
    export let showTrackNumber = true;

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

    {#if showTrackNumber}
        <div class="song-list-index song-list-cell">
            {track.attributes.trackNumber}
        </div>
    {/if}

    <div class="song-list-name song-list-cell">
        {track.attributes.name}
    </div>
    <div class="song-list-time song-list-cell">
        {formatMilliseconds(track.attributes.durationInMillis)}
    </div>
</div>

<style>
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



    .song-list-cell {
        display: table-cell;
        padding-left: 5px;
        padding-right: 5px;
        vertical-align: middle;
    }
</style>
