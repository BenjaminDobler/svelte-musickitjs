<script>
    import { onMount } from "svelte";

    import Tracks from "../components/Tracks.svelte";
    import { loadLibraryTracks } from "../service/musikkit";
    import { tracksStore } from "../store/musicstore";

    onMount(() => {
        loadLibraryTracks();
    });
</script>

<Tracks showArtwork={true} tracks={$tracksStore} />

<style>
</style>
