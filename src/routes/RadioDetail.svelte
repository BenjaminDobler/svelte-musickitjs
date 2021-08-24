<script>
    import { onMount } from "svelte";
    import { getRadioStation } from "../service/musikkit";
    export let params = {};

    onMount(() => {
        console.log("Load station ", params.stationID);
        getRadioStation(params.stationID);
    });
</script>
