import NotFound from './NotFound.svelte'
import Albums from './Albums.svelte';
import AlbumDetail from './AlbumDetail.svelte';

export const routes = {
    // Exact path
    '/': Albums,

    // Using named parameters, with last being optional
    '/albums': Albums,
    '/album': AlbumDetail,

    // This is optional, but if present it must be the last
    '*': NotFound,
}