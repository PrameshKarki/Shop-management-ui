import { createSlice } from "@reduxjs/toolkit";

const fullscreenSlice = createSlice({
    name: "fullscreen",
    initialState: { "isFullscreen": false },
    reducers: {
        changeFullScreenMode(state) {
            state.isFullscreen = !state.isFullscreen;
        }
    }
})
export default fullscreenSlice;