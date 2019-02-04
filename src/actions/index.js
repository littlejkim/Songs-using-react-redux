export const selectSong = song => {
    return {
        // return action
        type: "SONG_SELECTED",
        payload: song
    };
};
