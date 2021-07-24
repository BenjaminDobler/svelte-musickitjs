
<script>
import { playerStore } from "../../store/musicstore";

import Slider from "../slider/Slider.svelte";

let value;
</script>

Player
<Slider minValue="{0}" maxValue="{$playerStore.currentPlaybackduration}" bind:value="{$playerStore.currentPlaybacktime}"></Slider>
{$playerStore.currentPlaybacktime}

<style>

</style>