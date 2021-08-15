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
        <li on:click={() => push("/library/artists")}>Artists</li>
        <li>Tracks</li>
        <li on:click={() => push("/albums")}>Albums</li>
    </ul>
    Playlist
    <ul>
        {#each $playlistStore.playlists as playlistItem}
            <li
                class="playlist-item"
                on:click={() => playlistSelected(playlistItem)}
            >
                {playlistItem.attributes.name}
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        position: fixed;
        overflow-x: hidden;
        bottom: 0;
        left: 0;
        top: 0px;
        width: 260px;
        height: 100%;
        background: rgb(235 235 245 / 3%);
        border-inline-end-color: rgba(255, 255, 255, 0.1);
        border-inline-end-style: solid;
        border-inline-end-width: 1px;
        font-weight: 400;
        font-style: normal;
        
    }

    .playlist-item {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
