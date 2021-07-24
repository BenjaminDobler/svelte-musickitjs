
import { writable } from 'svelte/store';

export const store = writable({
	albums: [],
	selectedAlbum: null,
    selectedView: 'albums'
})

export const playerStore = writable({
	currentPlaybacktime: 0,
	currentPlaybackduration: 0,
	currentTrack: null
});