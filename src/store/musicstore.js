
import { writable } from 'svelte/store';

export const store = writable({
	albums: [],
	selectedAlbum: null,
    selectedView: 'albums'
})

export const playerStore = writable({
	currentPlaybacktime: 0,
	currentPlaybackduration: 0,
	currentTrack: null,
	playingTrack: null,
	state: 0
});

export const playlistStore = writable({
	playlists: [],
	selectedPlaylist: null
});

export const artistsStore = writable({
	artists: [],
	selectedArtistAlbums: [],
	selectedArtist: null
});

export const radioStore = writable({
	stations: [],
	selectedStation: null
});

export const tracksStore = writable([]);
export const recentlyStore = writable([]);