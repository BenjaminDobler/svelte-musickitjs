<script>
    import { onMount } from "svelte";

    import Tracks from "../components/Tracks.svelte";
    import { loadLibraryTracks } from "../service/musikkit";
    import { tracksStore } from "../store/musicstore";

    onMount(() => {
        loadLibraryTracks();
    });
</script>

<section>
<Tracks showArtwork={true} tracks={$tracksStore} />
</section>
<style>

    section {
        padding-top: 57px;
    }
</style>
