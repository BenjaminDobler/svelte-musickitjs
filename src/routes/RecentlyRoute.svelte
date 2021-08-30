<script>
    import { onMount } from "svelte";

    import { push } from "svelte-spa-router";
    import AlbumItem from "../components/AlbumItem.svelte";
    import { getRecentlyPlayed } from "../service/musikkit";
    import { recentlyStore } from "../store/musicstore";

    onMount(() => {
        getRecentlyPlayed();
    });
    function albumSelected(album) {
        push("/album/" + album.id);
    }
</script>

<section>
    <div class="album-container">
        {#each $recentlyStore as album}
            <AlbumItem {album} on:click={() => albumSelected(album)} />
        {/each}
    </div>
</section>

<style>
    .album-container {
        box-sizing: border-box;
        padding-top: 75px;
        padding-left: 20px;
        padding-right: 20px;
        display: grid;
        width: 100%;
        grid-column-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
</style>
