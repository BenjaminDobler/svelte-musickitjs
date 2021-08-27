<script>
    import CoverImage from "./CoverImage.svelte";

    export let album;
</script>

<div class="container" on:click>
    <CoverImage width="100%" aspectRatio="1:1" artwork={album.attributes.artwork} />
    <span class="album-title">{album.attributes.name}</span><br>
    <span class="album-title">{album.attributes.artistName}</span>

</div>

<style>
    .container {
        /* display: flex;
        align-items: center;
        margin-bottom: 10px;
        background: #00ff00; */
        overflow: hidden;
    }

    .album-title {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
