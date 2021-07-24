<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { loadAlbums } from "./service/musikkit";
    import Album from "./Album.svelte";

    const dispatch = createEventDispatcher();

    export let albums = [];

    function itemclicked(album) {
        console.log("on select ", album);
        dispatch("album", album);
    }
</script>

<section>
    <div class="album-container">
        {#each albums as album}
            <Album class="album" {album} on:click={() => itemclicked(album)} />
        {/each}
    </div>
</section>

<style>
    .album-container {
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
