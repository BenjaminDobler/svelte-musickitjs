<script>
    import { formatArtwork } from "../service/musikkit";

    export let width = 60;
    export let height = 60;
    export let artwork;

    function artworkFormatted(artwork) {
        return artwork ? formatArtwork(artwork) : "";
    }
</script>

<div
    class="album-thumb"
    style="background-image: url('{artworkFormatted(artwork)}');width: {width}px;height: {height}px"
/>

<style>
    .album-thumb {
        background-size: cover;
        margin-right: 10px;
        border-radius: 6px;
    }
</style>
