
<script>
import { playerStore } from "../../store/musicstore";
import CoverImage from "../CoverImage.svelte";

import Slider from "../slider/Slider.svelte";

let value;
</script>

Player {$playerStore.playingTrack?.attributes.name}
<CoverImage artwork={$playerStore.playingTrack?.artwork} />
<Slider minValue="{0}" maxValue="{$playerStore.currentPlaybackduration}" bind:value="{$playerStore.currentPlaybacktime}"></Slider>
{$playerStore.currentPlaybacktime}

<style>

</style>