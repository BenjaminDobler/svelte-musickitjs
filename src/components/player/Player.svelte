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
    import PlayerIcon from "./PlayerIcon.svelte";

    let value;

    function pausePlayer() {
        pause();
    }

    function scrub(event) {
        seekToTime(event.detail);
    }

    function getPlayIconType(state) {
        if (state === 2) {
            return "pause";
        }
        return "play";
    }
</script>

<div class="container">
    <div class="controls">
        <PlayerIcon on:click={togglePlay} type="prev" />
        <PlayerIcon
            on:click={togglePlay}
            type={getPlayIconType($playerStore.state)}
        />
        <PlayerIcon on:click={togglePlay} type="next" />
    </div>

    <div class="info-container">
        <CoverImage
            height="44px"
            width="44px"
            artwork={$playerStore.playingTrack?.artwork}
        />
        <div
            style="flex-grow: 1; display: flex; height: 100%; flex-direction: column;"
        >
            <div style="flex-grow: 1;">
                <div class="song-name">
                    {$playerStore.playingTrack?.attributes.name}
                </div>
                <div class="artist-label">
                    {$playerStore.playingTrack?.attributes.artistName} -
                    {$playerStore.playingTrack?.attributes.albumName}
                </div>
            </div>
            <Slider
                minValue={0}
                maxValue={$playerStore.currentPlaybackduration}
                bind:value={$playerStore.currentPlaybacktime}
                on:scrub={scrub}
            />
        </div>
    </div>
</div>

<style>
    .controls {
        margin-left: 50px;
        margin-right: 50px;
    }
    .container {
        display: flex;
        color: #a19da4;
        height: 55px;
        overflow: hidden;
        align-items: center;
    }

    .info-container {
        height: 44px;
        flex-grow: 1;
        display: flex;
        align-items: center;
        background: #464246;
        border-radius: 6px;
    }

    .song-name {
        font-size: 13px;
    }
    .artist-label {
        font-size: 13px;
    }
</style>
