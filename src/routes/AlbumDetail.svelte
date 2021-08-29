<script>
    import { onMount } from "svelte";
    import Button from "../components/Button.svelte";
    import CoverImage from "../components/CoverImage.svelte";
    import Tracks from "../components/Tracks.svelte";
    import { loadAlbum } from "../service/musikkit";
    import { store } from "../store/musicstore";

    export let params = {};

    onMount(() => {
        loadAlbum(params.albumID);
    });
</script>

<section>
    <div class="header-container">
        <CoverImage
            artwork={$store.selectedAlbum?.attributes.artwork}
            width="270px"
            height="270px"
        />
        <div style="margin-left: 20px;">
            <span class="artist-name"
                >{$store.selectedAlbum?.attributes?.name}</span
            ><br />
            <span class="album-name"
                >{$store.selectedAlbum?.attributes?.artistName}</span
            ><br />
            <span class="subline"
                >{$store.selectedAlbum?.attributes?.genreNames[0]} - {$store
                    .selectedAlbum?.attributes?.releaseDate}</span
            >
            <div>
                <Button />
            </div>
        </div>
    </div>

    {#if $store.selectedAlbum}
        <Tracks tracks={$store.selectedAlbum?.relationships?.tracks?.data} />
    {/if}
</section>

<style>
    section {
        padding: 40px;
        padding-top: 95px;
    }

    .header-container {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    }

    .artist-name {
        font-size: 26px;
        font-weight: 400;
    }

    .album-name {
        font-size: 26px;
        font-weight: 400;
        color: #fa586a;
    }

    .subline {
        color: rgba(255, 255, 255, 0.64);
        font-size: 12px;
        font-weight: 600;
    }
</style>
