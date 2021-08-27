<script>
    import { onMount } from "svelte";

    import CoverImage from "../components/CoverImage.svelte";
    import Tracks from "../components/Tracks.svelte";
    import { loadPlaylist } from "../service/musikkit";
    import { playlistStore, store } from "../store/musicstore";

    export let params = {};

    function paramsChange(id) {
        loadPlaylist(params.playlistID);
    }

    $: paramsChanged = paramsChange(params.playlistID);
</script>

<section>
    <CoverImage
        artwork={$playlistStore.selectedPlaylist?.attributes.artwork}
        width="270px"
        height="270px"
    />

    {#if $playlistStore.selectedPlaylist}
        <Tracks
            showArtwork={true}
            tracks={$playlistStore.selectedPlaylist?.relationships?.tracks
                ?.data}
        />
    {/if}
</section>

<style>
    section {
        padding: 30px;
        padding-top: 60px;
    }
</style>
