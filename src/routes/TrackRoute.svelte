<script>
    import { onMount } from "svelte";
    import Track from "../components/Track.svelte";

    import Tracks from "../components/Tracks.svelte";
    import VirtualList from "../components/vituallist/VirtualList.svelte";
    import { loadLibraryTracks } from "../service/musikkit";
    import { tracksStore } from "../store/musicstore";

    let tracks = [];

    let page = -1;
    let pageSize = 50;
    let loading = false;

    onMount(async () => {
        console.log(tracks);
        loadMore();
    });

    async function loadMore() {
        loading = true;
        page++;
        const newTracks = (await loadLibraryTracks(page * pageSize, pageSize))
            .data;
        tracks = [...tracks, ...newTracks];
        loading = false;
    }

    let end;

    $: if (end === tracks.length && !loading) {
        console.log("yeah!");
        loadMore();
    }
</script>

<section>
    <!-- <Tracks showArtwork={true} tracks={$tracksStore} /> -->

    <div class="container">
        <VirtualList items={tracks} let:item bind:end>
            <Track showArtwork={true} showTrackNumber={false} track={item} />
        </VirtualList>
    </div>

    {#if loading}
        <div>Loading</div>
    {/if}
</section>

<style>
    section {
        padding-top: 57px;
        height: 100%;
    }

    .container {
        display: table;
        width: 100%;

        font-size: 13px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.92);
        height: 100%;
    }
</style>
