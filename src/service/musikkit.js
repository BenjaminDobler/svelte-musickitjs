import { store, playerStore, playlistStore, artistsStore, radioStore, tracksStore } from "../store/musicstore";
import { developerToken } from "../credentials";
import { get } from "svelte/store";
import { pop, push } from "svelte-spa-router";

export let albums = [];
let musicKit;
let setup;
let initialized = false;



function getApiHeadersWithUserToken() {
    const musicKitInstance = MusicKit.getInstance();

    return {
        'Music-User-Token': musicKitInstance.musicUserToken,
        Authorization: `Bearer ${musicKitInstance.developerToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
}

async function getURL(url) {
    // Default options are marked with *
    const response = await fetch('https://api.music.apple.com/v1' + url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: getApiHeadersWithUserToken()
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


export async function init() {
    setup = new Promise((resolve) => {
        document.addEventListener('musickitloaded', () => {
            const musicKitInstance = window.MusicKit.configure({
                developerToken,
                app: {
                    name: 'MusicKit Web App',
                    build: '1.0.0',
                },
            });
            resolve(musicKitInstance);
        });
    });

    musicKit = await setup;
    initialized = true;

    musicKit.addEventListener('playbackProgressDidChange', (e) => {
        console.log('playbackProgressDidChange ', e.progress);
    });

    musicKit.addEventListener('playbackDurationDidChange', (e) => {
        console.log('playbackDurationDidChange ', e);
    });

    musicKit.addEventListener('playbackTimeDidChange', (e) => {
        playerStore.update(data => ({ ...data, currentPlaybackduration: e.currentPlaybackDuration, currentPlaybacktime: e.currentPlaybackTime }));

    });

    musicKit.addEventListener('queueItemsDidChange', (e) => {
        console.log('queueItemsDidChange ', e);
        playerStore.update(data => ({ ...data, playingTrack: e[0] }))
    });

    musicKit.addEventListener('playbackStateDidChange', (e) => {
        console.log('playbackStateDidChange ', e);
        playerStore.update(data => ({ ...data, state: e.state }));
    });

    try {
        await musicKit.authorize();
    } catch (error) {
        // Handle cases when authorization fails
        console.log('error ', error);
    }



    console.log('before heay');
    const heavy = await getURL(`/catalog/${MusicKit.getInstance().api.storefrontId}/charts?types=albums&chart=most-played`)
    console.log("heavy", heavy);
    getRecentlyPlayed();

}

export async function getRecentlyPlayed() {
    const recentlyPlayed = await getURL(`/me/recent/played?limit=10`)
    console.log("recentlyPlayed", recentlyPlayed);
}


export async function getRadioStations() {
    await setup;
    const stations = (await getURL(`/catalog/${MusicKit.getInstance().api.storefrontId}/stations?filter[featured]=apple-music-live-radio`)).data;
    console.log('stations ', stations);
    radioStore.update((data) => ({ ...data, stations }));
}

export async function getRadioStation(id) {
    await setup;
    const station = (await getURL(`/catalog/${MusicKit.getInstance().api.storefrontId}/stations/${id}`));
    console.log('station ', station);
    radioStore.update((data) => ({ ...data, selectedStation: station }));
}

export async function loadAlbums() {
    console.log('load albums');
    await setup;
    albums = await musicKit.api.library.albums([]);
    store.update(data => ({ ...data, albums }));
}

export async function loadAlbum(id) {
    await setup;
    const album = await musicKit.api.library.album(id);
    store.update(data => ({ ...data, selectedAlbum: album, selectedView: 'album' }));
}

export function formatArtwork(artwork, width = 100, height = 100) {
    return MusicKit.formatArtworkURL(artwork, width, height);
}

export function formatMediaTime(ms) {
    return initialized ? MusicKit.formatMediaTime(ms) : 0;
}

export function addToPlaylist(track) {
    musicKit
        .setQueue({
            song: track.id,
        })
        .then(() => {
            musicKit.play();
        });
}

export function pause() {
    console.log('pause');
    musicKit.pause();
}

export function togglePlay() {
    // TODO: get is supposed to be unperformant...
    if (get(playerStore).state === 3) {
        musicKit.player.play();
    } else {
        musicKit.player.pause();
    }
}

export function seekToTime(seconds) {
    musicKit.player.seekToTime(seconds);
}


export async function loadArtists() {
    console.log('load artists');
    await setup;
    const artists = await musicKit.api.library.artists(null, { limit: 100 });
    console.log('artists ', artists);
    artistsStore.update(data => ({ artists }));
}

export async function loadLibraryArtistDetail(artistId) {
    await setup;

    const artist = await musicKit.api.library.artist(artistId, { include: 'albums,playlists' });
    const albumIds = artist.relationships.albums.data.map((a) => a.id);
    const albums = await musicKit.api.library.albums(albumIds);

    console.log(artist, albums);

    artistsStore.update((data) => ({ ...data, selectedArtistAlbums: albums }));


}

export async function loadLibraryTracks() {
    await setup;
    const tracks = (await getURL(`/me/library/songs`));
    tracksStore.update(data => tracks.data);
}


export async function loadPlaylists() {
    await setup;
    const playlists = await musicKit.api.library.playlists(null);
    playlistStore.update(data => ({ playlists }));
}

export async function loadPlaylist(id) {
    await setup;
    const playlist = await musicKit.api.library.playlist(id);
    playlistStore.update(data => ({ ...data, selectedPlaylist: playlist }));

}

export async function addTrackToPlaylist(track, playlist) {
    console.log('add track ', track, playlist);
    const data = {
        data: [{id: track.id}]
    }
    //https://api.music.apple.com/v1/me/library/playlists/{id}/tracks
    const response = await fetch(`https://api.music.apple.com/v1/me/library/playlists/${playlist.id}/tracks`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: getApiHeadersWithUserToken(),
        body: JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

init();

