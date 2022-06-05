import { createSlice, current } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: { "menuItems": [] },
    reducers: {
        addMenuItem(state, action) {
            !state.menuItems.length ? state.menuItems.push(action.payload) : (() => {
                const objectIndex = state.menuItems.findIndex(item => item.itemName === action.payload.itemName);
                objectIndex < 0 ? state.menuItems.push(action.payload) : (() => {
                    state.menuItems[objectIndex].price = action.payload.price;
                })();
            })();
        },
        deleteMenuItem(state, action) {
            !state.menuItems.length ? (() => { })() : (() => {
                const objectIndex = current(state).menuItems.findIndex(item => item.id === action.payload.id)
                objectIndex < 0 ? (() => { })() : state.menuItems.splice(objectIndex, 1);
            })();
        },
        incrQuantity(state, action) {
            console.log("inside incrQuantity action----");
            const objectIndex = current(state).menuItems.findIndex(item => item.id === action.payload.id);
            objectIndex < 0 ? (() => { })() : state.menuItems[objectIndex].quantity++;
        },
        decrQuantity(state, action) {
            console.log("inside decrQuantity action----");
            const objectIndex = current(state).menuItems.findIndex(item => item.id === action.payload.id);
            objectIndex < 0 ? (() => { })() : state.menuItems[objectIndex].quantity--;
        }
    }
});
export default menuSlice;