<script>
    import { toggleLogin } from "../service/musikkit";

    import { playerStore, store } from "../store/musicstore";
    import Player from "./player/Player.svelte";
</script>

<div class="header">
    {#if $playerStore.playingTrack}
        <Player />
    {/if}

    <div style="flex-grow: 1;" />

    <div style="flex-shring: 0; margin-right: 10px" on:click={()=>toggleLogin()}>
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            class="web-navigation__auth-avatar"
            ><path
                fill="rgb(250, 88, 106)"
                d="M14.007 28C6.299 28 0 21.703 0 14S6.299 0 14.007 0C21.7 0 28 6.297 28 14s-6.299 14-13.993 14zm0-9.392c4.253 0 7.49 1.514 8.805 3.216 1.815-2.08 2.899-4.81 2.899-7.824 0-6.54-5.12-11.784-11.704-11.784C7.41 2.216 2.289 7.46 2.289 14c0 3.014 1.084 5.743 2.9 7.824 1.313-1.702 4.55-3.216 8.818-3.216zm-.014-2.297c-2.6-.027-4.646-2.19-4.646-5.095-.014-2.73 2.059-4.986 4.646-4.986 2.601 0 4.647 2.256 4.647 4.986 0 2.906-2.032 5.122-4.647 5.095z"
            /></svg
        >
    </div>
</div>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 260px;
        right: 0;
        overflow: hidden;
        height: 55px;
        background-color: var(--playerBackground);
        -webkit-backdrop-filter: saturate(50%) blur(20px);
        backdrop-filter: saturate(50%) blur(20px);
        z-index: 1000;
        display: flex;
        align-items: center;
    }
</style>
