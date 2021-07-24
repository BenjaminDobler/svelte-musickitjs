<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { loadAlbums } from "./service/musikkit";
    import Album from "./Album.svelte";

    const dispatch = createEventDispatcher();

    export let albums = [];

    

    function itemclicked(album) {
        console.log('on select ', album);
        dispatch('album', album);
    }
</script>

<section>
    {#each albums as album}
        <Album {album} on:click={()=>itemclicked(album)}  />
    {/each}
</section>
