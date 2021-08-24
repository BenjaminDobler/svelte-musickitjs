<script>
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";
    import CoverImage from "../components/CoverImage.svelte";
    import { addToPlaylist, getRadioStations } from "../service/musikkit";
    import { radioStore } from "../store/musicstore";

    onMount(() => {
        console.log("load radios");
        getRadioStations();
    });

    function loadStation(station) {
        //push('/catalog/radio/'+station.id)
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
