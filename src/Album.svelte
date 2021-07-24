<script>
    import { formatArtwork } from "./service/musikkit";

    export let album;

    function artwork() {
        return album.attributes.artwork
            ? formatArtwork(album.attributes.artwork)
            : "";
    }
</script>

<div class="container" on:click>
    <!-- <img src={artwork()} alt="album artwork" /> -->
    <div class="album-thumb" style="background-image: url('{artwork()}');" />
    {album.attributes.name}
</div>

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
