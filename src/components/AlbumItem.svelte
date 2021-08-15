<script>
    import CoverImage from "./CoverImage.svelte";

    export let album;
</script>

<div class="container" on:click>
    <CoverImage width="100%" aspectRatio="1:1" artwork={album.attributes.artwork} />
    <span class="album-title">{album.attributes.name}</span>
</div>

<style>
    .container {
        /* display: flex;
        align-items: center;
        margin-bottom: 10px;
        background: #00ff00; */
        margin: 10px;
    }

    /* .album-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    } */
</style>
