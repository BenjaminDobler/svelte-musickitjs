<script>
    import { playerStore, store } from "../store/musicstore";
    import Player from "./player/Player.svelte";
</script>

<div class="header">
    {#if $playerStore.playingTrack}
        <Player />
    {/if}
</div>

<style>
    .header {
        position: fixed;
        top: 0;
        width: 100vw;
        left: 260px;
        overflow: hidden;
        height: 55px;
        background-color: var(--playerBackground);
        -webkit-backdrop-filter: saturate(50%) blur(20px);
        backdrop-filter: saturate(50%) blur(20px);
        z-index: 1000;
    }
</style>
