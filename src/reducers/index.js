import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "BLEED", duration: "5:20" },
        { title: "All Star", duration: "3:15" },
        { title: "I want you", duration: "2:22" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
