<script>
    import { onMount } from "svelte";
    import CoverImage from "../components/CoverImage.svelte";
    import { addToPlaylist, getRadioStations } from "../service/musikkit";
    import { radioStore } from "../store/musicstore";

    onMount(() => {
        getRadioStations();
    });

    function loadStation(station) {
        addToPlaylist(station);
    }
</script>

<div class="radios-wrapper">
    Stations
    {#each $radioStore.stations as station}
        <div
            on:click={() => {
                loadStation(station);
            }}
        >
            <CoverImage
                width="60px"
                height="60px"
                artwork={station.attributes.artwork}
            />

            {station.attributes.name}
        </div>
    {/each}
</div>

<style>
    .radios-wrapper {
        padding-top: 60px;
    }
</style>
