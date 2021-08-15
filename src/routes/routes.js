import NotFound from './NotFound.svelte'
import Albums from './Albums.svelte';
import AlbumDetail from './AlbumDetail.svelte';
import PlaylistDetail from './PlaylistDetail.svelte';
import Artists from './Artists.svelte';
import ArtistDetail from './ArtistDetail.svelte';


export const routes = {
    // Exact path
    '/': Albums,

    // Using named parameters, with last being optional
    '/albums': Albums,
    '/album/:albumID': AlbumDetail,
    '/playlist/:playlistID': PlaylistDetail,

    '/library/artists/': Artists,
    '/library/artists/:artistID': Artists,


    // This is optional, but if present it must be the last
    '*': NotFound,
}