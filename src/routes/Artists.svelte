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
        push("/library/artists/" + id);
    }

    export let params = {};
    function paramsChange(id) {
        loadLibraryArtistDetail(id);
    }

    $: paramsChanged = paramsChange(params.artistID);
</script>

<section>
    <ul class="artist-list">
        {#each $artistsStore.artists as artist}
            <li class="artist-item" on:click={() => selectArtist(artist.id)}>
                <div class="artist-artwork" />
                {artist.attributes.name}
            </li>
        {/each}
    </ul>

        <div class="album-container">
            {#each $artistsStore.selectedArtistAlbums || [] as album}
                <AlbumItem {album} on:click={() => albumSelected(album)} />
            {/each}
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
        box-sizing: border-box;
        padding-top: 25px;
        padding-left: 20px;
        padding-right: 20px;
        display: grid;
        width: 100%;
        grid-column-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    .artist-artwork {
        width: 36px;
        height: 36px;
        background: #000;
        border-radius: 50%;
    }
</style>
