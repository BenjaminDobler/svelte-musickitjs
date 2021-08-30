import NotFound from './NotFound.svelte'
import Albums from './Albums.svelte';
import AlbumDetail from './AlbumDetail.svelte';
import PlaylistDetail from './PlaylistDetail.svelte';
import Artists from './Artists.svelte';
import ArtistDetail from './ArtistDetail.svelte';
import Radio from './Radio.svelte';
import RadioDetail from './RadioDetail.svelte';
import TrackRoute from './TrackRoute.svelte';
import RecentlyRoute from './RecentlyRoute.svelte';


export const routes = {
    '/': Albums,
    '/albums': Albums,
    '/album/:albumID': AlbumDetail,
    '/library/recently': RecentlyRoute,
    '/playlist/:playlistID': PlaylistDetail,
    '/library/artists/': Artists,
    '/library/artists/:artistID': Artists,
    '/library/tracks': TrackRoute,
    '/catalog/radios/': Radio,
    '/catalog/radio/:stationID': RadioDetail,


    // This is optional, but if present it must be the last
    '*': NotFound,
}