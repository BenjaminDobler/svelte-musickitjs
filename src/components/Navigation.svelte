<script>
import { push } from "svelte-spa-router";

    import { playlistStore } from "../store/musicstore";

    function playlistSelected(playlistItem) {
        push("/playlist/" + playlistItem.id);
    }
</script>

<nav>
    <ul>
        <li>Jetzt hören</li>
        <li>Entdecken</li>
        <li>Radio</li>
    </ul>

    Mediathek
    <ul>
        <li>Jetzt hören</li>
        <li>Entdecken</li>
        <li>Radio</li>
    </ul>
    Playlist
    <ul>
        {#each $playlistStore.playlists as playlistItem}
            <li on:click={() => playlistSelected(playlistItem)}>
                {playlistItem.attributes.name}
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        width: 260px;
        height: 100%;
        background: rgb(235 235 245 / 3%);
    }
</style>
