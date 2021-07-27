<script>
    import { formatArtwork } from "../service/musikkit";

    export let width = "60px";
    export let height = "60px";
    export let aspectRatio;
    export let artwork;
    let paddingTop = 0;

    function artworkFormatted(artwork) {
        return artwork ? formatArtwork(artwork) : "";
    }

    function getHeight() {
        if (aspectRatio) {
            return "auto";
        }
        return height;
    }

    function getPaddingTop() {
        if (aspectRatio) {
            return "100%";
        }
        return 0;
    }
</script>

<div
    class="album-thumb"
    style="background-image: url('{artworkFormatted(
        artwork
    )}');width: {width};height: {getHeight(
        height
    )};padding-top: {getPaddingTop()}"
/>

<style>
    .album-thumb {
        background-size: cover;
        margin-right: 10px;
        border-radius: 6px;
    }
</style>
