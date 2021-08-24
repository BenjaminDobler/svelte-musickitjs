<script>
    import { push } from "svelte-spa-router";

    import { playlistStore } from "../store/musicstore";
    import NavIcon from "./NavIcon.svelte";

    function playlistSelected(playlistItem) {
        push("/playlist/" + playlistItem.id);
    }
</script>

<nav>
    <div class="logo-container">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83"
        height="20"
        viewBox="0 0 83 20"
        version="1.1"
        class="web-navigation__logo-vector"
        role="presentation"
        ><path
            fill="rgba(255,255,255,0.92)"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            d="M34.752 19.746V6.243h-.088l-5.433 13.503h-2.074L21.711 6.243h-.087v13.503h-2.548V1.399h3.235l5.833 14.621h.1L34.064 1.4h3.248v18.347h-2.56zm16.649 0h-2.586v-2.263h-.062c-.725 1.602-2.061 2.504-4.072 2.504-2.86 0-4.61-1.894-4.61-4.958V6.37h2.698v8.125c0 2.034.95 3.127 2.81 3.127 1.95 0 3.124-1.373 3.124-3.458V6.37H51.4v13.376zm7.394-13.618c3.06 0 5.046 1.73 5.134 4.196h-2.536c-.15-1.296-1.087-2.11-2.598-2.11-1.462 0-2.436.724-2.436 1.793 0 .839.6 1.41 2.023 1.741l2.136.496c2.686.636 3.71 1.704 3.71 3.636 0 2.442-2.236 4.12-5.333 4.12-3.285 0-5.26-1.64-5.509-4.183h2.673c.25 1.398 1.187 2.085 2.836 2.085 1.623 0 2.623-.687 2.623-1.78 0-.865-.487-1.373-1.924-1.704l-2.136-.508c-2.498-.585-3.735-1.806-3.735-3.75 0-2.391 2.049-4.032 5.072-4.032zM66.1 2.836c0-.878.7-1.577 1.561-1.577.862 0 1.55.7 1.55 1.577 0 .864-.688 1.576-1.55 1.576a1.573 1.573 0 0 1-1.56-1.576zm.212 3.534h2.698v13.376h-2.698V6.37zm14.089 4.603c-.275-1.424-1.324-2.556-3.085-2.556-2.086 0-3.46 1.767-3.46 4.64 0 2.938 1.386 4.642 3.485 4.642 1.66 0 2.748-.928 3.06-2.48H83C82.713 18.067 80.477 20 77.317 20c-3.76 0-6.208-2.62-6.208-6.942 0-4.247 2.448-6.93 6.183-6.93 3.385 0 5.446 2.213 5.683 4.845h-2.573zM10.824 3.189c-.698.834-1.805 1.496-2.913 1.398-.145-1.128.41-2.33 1.036-3.065C9.644.662 10.848.05 11.835 0c.121 1.178-.336 2.33-1.01 3.19zm.999 1.619c.624.049 2.425.244 3.578 1.98-.096.074-2.137 1.272-2.113 3.79.024 3.01 2.593 4.012 2.617 4.037-.024.074-.407 1.419-1.344 2.812-.817 1.224-1.657 2.422-3.002 2.447-1.297.024-1.73-.783-3.218-.783-1.489 0-1.97.758-3.194.807-1.297.048-2.28-1.297-3.097-2.52C.368 14.908-.904 10.408.825 7.375c.84-1.516 2.377-2.47 4.034-2.495 1.273-.023 2.45.857 3.218.857.769 0 2.137-1.027 3.746-.93z"
        /></svg
    >
</div>

    <input type="text" />
    <ul>
        <li class="playlist-item">Jetzt hören</li>
        <li class="playlist-item">Entdecken</li>
        <li class="playlist-item" on:click={() => push("/catalog/radios")}>Radio</li>
    </ul>

    <span class="headline">Mediathek</span>

    <ul>
        <li class="playlist-item" on:click={() => push("/library/artists")}>
            <NavIcon fill="#fa586a" type="artist" />
            Artists
        </li>
        <li class="playlist-item" on:click={() => push("/library/tracks")}>
            <NavIcon fill="#fa586a" type="tracks" />
            Tracks
        </li>
        <li class="playlist-item" on:click={() => push("/albums")}>
            <NavIcon fill="#fa586a" type="albums" />
            Albums
        </li>
    </ul>
    <span class="headline">Playlist</span>
    <ul>
        {#each $playlistStore.playlists as playlistItem}
            <li
                class="playlist-item"
                on:click={() => playlistSelected(playlistItem)}
            >
                <NavIcon fill="#8D8D8D" type="playlist" />

                <div class="playlist-item-label">
                    {playlistItem.attributes.name}
                </div>
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
        padding-left: 25px;
        padding-right: 20px;
        box-sizing: border-box;
        color: #eeeeee;
    }

    .logo-container {
        margin-top: 17px;
    }

    .playlist-item {
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 15px;
        line-height: 1.46667;
        font-weight: 400;
        letter-spacing: 0;
        padding-top: 5px;
        padding-bottom: 5px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        cursor: pointer;
    }

    .playlist-item-label {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .headline {
        font-size: 10px;
        line-height: 1.3;
        font-weight: 600;
        letter-spacing: 0;
        color: rgb(255 255 255 / 92%);
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    input {
        width: 100%;
        height: 38px;
        padding-top: 6px;
        padding-bottom: 5px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 9px;
        border-width: 1px;
        border-style: solid;
        background-color: #1f1f1f;
        border-color: rgba(0, 0, 0, 0.15);
        color: #f5f5f7;
        font-size: 15px;
        line-height: 1.46667;
        font-weight: 400;
        letter-spacing: 0;
        -webkit-padding-start: 34px;
        padding-inline-start: 34px;
        -webkit-padding-end: 5px;
        padding-inline-end: 5px;
    }
</style>
