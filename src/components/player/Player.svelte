<script>
    import {
        formatMediaTime,
        pause,
        seekToTime,
        togglePlay,
    } from "../../service/musikkit";

    import { playerStore } from "../../store/musicstore";
    import CoverImage from "../CoverImage.svelte";

    import Slider from "../slider/Slider.svelte";
    import PlayIcon from "./PlayIcon.svelte";

    let value;

    function pausePlayer() {
        pause();
    }

    function scrub(event) {
        seekToTime(event.detail);
    }
</script>

<div class="container">
    <CoverImage artwork={$playerStore.playingTrack?.artwork} />

    <div class="info-container">
        <div class="info-container">
            <div>{$playerStore.playingTrack?.attributes.name}</div>
            <div>
                {$playerStore.playingTrack?.attributes.artistName} -
                {$playerStore.playingTrack?.attributes.albumName}
            </div>
        </div>
    </div>

    <Slider
        minValue={0}
        maxValue={$playerStore.currentPlaybackduration}
        bind:value={$playerStore.currentPlaybacktime}
        on:scrub={scrub}
    />
    {formatMediaTime($playerStore.currentPlaybacktime)}

    <PlayIcon on:click={togglePlay} />

    {$playerStore.state}
</div>

<style>
    .container {
        display: flex;
        color: #a19da4;
        height: 80px;
        overflow: hidden;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #464246;
        border-radius: 6px;
    }
</style>
