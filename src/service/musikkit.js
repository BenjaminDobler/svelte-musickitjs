import { store, playerStore } from "../store/musicstore";
import { developerToken } from "../credentials";





export let albums = [];
let musicKit;
let setup;

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
    });

    musicKit.addEventListener('playbackStateDidChange', (e) => {
        console.log('playbackStateDidChange ', e);
    });

    try {
        await musicKit.authorize();
    } catch (error) {
        // Handle cases when authorization fails
        console.log('error ', error);
    }

}




export async function loadAlbums() {
    await setup;
    albums = await musicKit.api.library.albums([]);
    store.update(data => ({ ...data, albums }));
}

export async function loadAlbum(id) {
    const album = await musicKit.api.library.album(id);
    store.update(data => ({ ...data, selectedAlbum: album, selectedView: 'album' }));
}


export function formatArtwork(artwork, width = 100, height = 100) {
    return MusicKit.formatArtworkURL(artwork, width, height);
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


init();
