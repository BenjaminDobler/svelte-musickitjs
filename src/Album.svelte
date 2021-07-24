<script>
    import CoverImage from "./components/CoverImage.svelte";

    export let album;
</script>

<div class="container" on:click>
    <CoverImage artwork={album.attributes.artwork} />
    {album.attributes.name}
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        background: #00ff00;
    }
</style>
