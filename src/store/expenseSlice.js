import { createSlice, current } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expense",
    initialState: { "expenseItems": [] },
    reducers: {
        addExpenseItem(state, action) {
            !state.expenseItems.length ? state.expenseItems.push(action.payload) : (() => {
                const objectIndex = state.expenseItems.findIndex(item => item.itemName === action.payload.itemName);
                objectIndex < 0 ? state.expenseItems.push(action.payload) : (() => {
                    state.expenseItems[objectIndex].price = action.payload.price;
                    state.expenseItems[objectIndex].quantity = action.payload.quantity;
                })();
            })();
            //also save to server;
        },
        deleteExpenseItem(state, action) {
            !state.expenseItems.length ? (() => { })() : (() => {
                const objectIndex = current(state).expenseItems.findIndex(item => item.id === action.payload.id);
                objectIndex < 0 ? (() => { })() : state.expenseItems.splice(objectIndex, 1);
            })();
            //also delete from server;
        }

    }
});
export default expenseSlice;