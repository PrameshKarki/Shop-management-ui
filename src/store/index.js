import { createSlice, configureStore } from "@reduxjs/toolkit";

const visiblitySlice = createSlice({
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

// const overviewSlice = createSlice({
//     name: "overflow",
//     initialState: { "isVisible": true },
//     reducers: {
//         isVisible(state, action) {
//             state.isVisible = action.payload;
//         },
//     }
// });

// let isExist;
// const menuSlice = createSlice({
//     name: "menu",
//     initialState: { "menuItems": [] },
//     reducers: {
//         addMenuItem(state, action) {
//             !state.menuItems.length ? state.menuItems.push(action.payload) :
//                 isExist = state.menuItems.find(itm => itm.id === action.payload.id);
//             if (isExist) state.menuItems.map((item) => {
//                 return item.id === action.payload.id ? "" : "";
//             });
//         },
//         deleteMenuItem(state, action) {
//             isExist = state.menuItems.find(itm => itm.id === action.payload.id);
//             if (isExist) state.menuItems.map((item) => {
//                 if (item.id === action.payload.id) {
//                     return state.menuItems.splice(state.menuItems.indexOf(action.payload), 1);
//                 }
//             });
//             //also detele from server;
//         }
//     }
// })

// const expenseSlice = createSlice({
//     name: "expense",
//     initialState: { "expenseItems": [] },
//     reducers: {
//         addExpenseItem(state, action) {
//             !state.expenseItems.length ? state.expenseItems.push(action.payload) :
//                 isExist = state.expenseItems.find(itm => itm.id === action.payload.id);
//             if (isExist) state.expenseItems.map((item) => {
//                 return item.id === action.payload.id ? item.quantity++ : "";
//             });
//             else state.menuItems.push({ "id": action.payload.id, "itemName": action.payload.itemName, "price": action.payload.price });
//             //also save to server;
//         },
//         deleteExpenseItem(state, action) {
//             isExist = state.expenseItems.find(itm => itm.id === action.payload.id);
//             if (isExist) state.expenseItems.map((item) => {
//                 if (item.id === action.payload.id) {
//                     return state.expenseItems.splice(state.expenseItems.indexOf(action.payload), 1);
//                 }
//             });
//             //also detele from server;
//         }

//     }
// });
// const orderSlice = createSlice({
//     name: "order",
//     initialState: {
//         "orderItems": []
//     },
//     reducers: {
//         addOrderItem(state, action) {
//             !state.orderItems.length ? state.orderItems.push(action.payload) :
//                 isExist = state.orderItems.find(itm => itm.id === action.payload.id);
//             if (isExist) state.orderItems.map((item) => {
//                 return item.id === action.payload.id ? item.quantity++ : "";
//             });
//             else state.orderItems.push({ "id": action.payload.id, "quantity": 1, "itemName": action.payload.itemName, "price": action.payload.price });
//             //also save to server;
//         },
//         removeOrderItem(state, action) {
//             state.orderItems.length ? isExist = state.orderItems.find(itm => itm.id === action.payload.id) : "";
//             if (isExist.quantity <= 1) state.orderItems.map((item => {
//                 if (item.id === action.payload.id) {
//                     return state.expenseItems.splice(state.expenseItems.indexOf(isExist), 1);
//                 }
//             }));
//             else state.orderItems.map((item) => {
//                 return item.id === action.payload.id ? item.quantity-- : "";
//             });
//         }
//     }
// })

//configure the store 
const store = configureStore({
    reducer: {
        // overview: overviewSlice.reducer,
        visible: visiblitySlice.reducer,
        // menu: menuSlice.reducer,
        // expense: expenseSlice.reducer,
        // order: orderSlice.reducer
    }
});


//export the actions of the slices as well
export const visibilityActions = visiblitySlice.actions;
// export const menuActions = menuSlice.actions;
// export const expenseActions = expenseSlice.actions;
// export const orderActions = orderSlice.actions;
// export const overviewActions = menuSlice.actions;

export default store;