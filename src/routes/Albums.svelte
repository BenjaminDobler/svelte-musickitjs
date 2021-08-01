<script>
    import { push } from "svelte-spa-router";

    import AlbumItem from "../components/AlbumItem.svelte";
    import { loadAlbum } from "../service/musikkit";
    import { store } from "../store/musicstore";

    function albumSelected(album) {
        push("/album/" + album.id);
    }
</script>

<section>
    <div class="album-container">
        {#each $store.albums as album}
            <AlbumItem {album} on:click={() => albumSelected(album)} />
        {/each}
    </div>
</section>

<style>
    .album-container {
        padding-top: 75px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 600px) {
        .album-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media only screen and (max-width: 400px) {
        .album-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media only screen and (min-width: 1000px) {
        .album-container {
            grid-template-columns: repeat(7, 1fr);
        }
    }
</style>
