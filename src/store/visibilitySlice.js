import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
    name: "visibility",
    initialState: {
        "overviewIsVisible": true,
        "menuIsVisible": false,
        "cardMenuIsVisible": false,
        "listMenuIsVisible": false,
        "editMenuPnlIsVisible": false,
        "expenseIsVisible": false,
    },
    reducers: {
        overviewVisibility(state, action) {
            state.overviewIsVisible = action.payload;
            state.menuIsVisible = !action.payload;
            state.cardMenuIsVisible = !action.payload;
            state.listMenuIsVisible = !action.payload;
            state.editMenuPnlIsVisible = !action.payload;
            state.expenseIsVisible = !action.payload;
        },
        listMenuVisibility(state, action) {
            state.listMenuIsVisible = action.payload;
            state.editMenuPnlIsVisible = !action.payload;
            state.expenseIsVisible = !action.payload;
            state.overviewIsVisible = !action.payload;
            state.menuIsVisible = !action.payload;
            state.cardMenuIsVisible = !action.payload;
        },
        cardMenuVisibility(state, action) {
            state.cardMenuIsVisible = action.payload;
            state.listMenuIsVisible = !action.payload;
            state.editMenuPnlIsVisible = !action.payload;
            state.expenseIsVisible = !action.payload;
            state.overviewIsVisible = !action.payload;
            state.menuIsVisible = !action.payload;
        },
        editMenuPnlVisibility(state, action) {
            state.editMenuPnlIsVisible = action.payload;
            state.listMenuIsVisible = !action.payload;
            state.expenseIsVisible = !action.payload;
            state.overviewIsVisible = !action.payload;
            state.menuIsVisible = !action.payload;
            state.cardMenuIsVisible = !action.payload;
        },
        expenseVisibility(state, action) {
            state.expenseIsVisible = action.payload;
            state.listMenuIsVisible = !action.payload;
            state.editMenuPnlIsVisible = !action.payload;
            state.overviewIsVisible = !action.payload;
            state.menuIsVisible = !action.payload;
            state.cardMenuIsVisible = !action.payload;
        },

    }
});
export default visibilitySlice;