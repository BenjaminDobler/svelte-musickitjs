<script>
    import { addToPlaylist, formatMediaTime } from "../service/musikkit";
    import CoverImage from "./CoverImage.svelte";
    import Track from "./Track.svelte";

    export let tracks = [];
    export let showArtwork = false;
    export let showTrackNumber = false;

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
        <Track {showArtwork} {track} {showTrackNumber} />
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
</style>
