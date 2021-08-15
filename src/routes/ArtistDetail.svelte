<script>
import { loadLibraryArtistDetail } from "../service/musikkit";


    export let params = {};
    function paramsChange(id) {
        console.log('load artist ', id);
        loadLibraryArtistDetail(id);
    }

    $: paramsChanged = paramsChange(params.artistID);
</script>

Artist Detail
