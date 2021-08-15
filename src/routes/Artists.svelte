<script>
    import { onMount } from "svelte";

    import { push } from "svelte-spa-router";
    import AlbumItem from "../components/AlbumItem.svelte";
    import { loadArtists, loadLibraryArtistDetail } from "../service/musikkit";

    import { artistsStore, store } from "../store/musicstore";

    onMount(() => {
        loadArtists();
    });

    function albumSelected(album) {
        push("/album/" + album.id);
    }

    function selectArtist(id) {
        // loadLibraryArtistDetail(artist.id);
        push("/library/artists/" + id);
    }

    export let params = {};
    function paramsChange(id) {
        console.log("load artist ", id);
        loadLibraryArtistDetail(id);
    }

    $: paramsChanged = paramsChange(params.artistID);
</script>

<section>
    <ul class="artist-list">
        {#each $artistsStore.artists as artist}
            <li class="artist-item" on:click={() => selectArtist(artist.id)}>
                {artist.attributes.name}
            </li>
        {/each}
    </ul>

    <div>
        <div class="album-container">
            {#each $artistsStore.selectedArtistAlbums || [] as album}
                <AlbumItem {album} on:click={() => albumSelected(album)} />
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        padding-top: 56px;
        display: flex;
    }
    .artist-list {
        flex-shrink: 0;
        list-style-type: none;
        margin-inline-start: 0;
        padding-left: 0;
        padding-inline-start: 0;
        padding-top: 0;
        margin-top: 0;
        width: 240px;
    }
    .artist-item {
        display: flex;
        align-items: center;
        height: 54px;
        font-size: 15px;
        border: solid 1px rgba(255, 255, 255, 0.1);
        vertical-align: middle;
    }
    .album-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
</style>
