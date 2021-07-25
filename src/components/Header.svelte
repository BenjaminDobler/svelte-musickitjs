<script>
    import Player from "./player/Player.svelte";
</script>

<div class="header">
    <Player />
</div>

<style>
    .header {
        position: fixed;
        top: 0;
        width: 100vw;
        left: 0;
        overflow: hidden;
        height: 55px;
        background-color: var(--playerBackground);
        -webkit-backdrop-filter: saturate(50%) blur(20px);
        backdrop-filter: saturate(50%) blur(20px);
        z-index: 1000;
    }
</style>
