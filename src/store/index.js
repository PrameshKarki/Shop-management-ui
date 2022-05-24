import { createSlice, configureStore, current } from "@reduxjs/toolkit";
// const menuObjectArchetecture={ "id":12-, "itemName": 0, "price":0};
// const expenseObjectArchetecture = { "id":12,"itemName": 0, "quantity": 0, "price": 0 };
// const orderObjectArchetecture={ "id":12,"itemName": 0,"quantity":0, "unitPrice":0};
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

const menuSlice = createSlice({
    name: "menu",
    initialState: { "menuItems": [{ "id": "12ee12", "itemName": "Samosa", "price": 50 }, { "id": "eeeeee412", "itemName": "Cold Drinks", "price": "23434" }, { "id": "deeeee412", "itemName": "lassi", "price": "700" }] },
    reducers: {
        addMenuItem(state, action) {
            !state.menuItems.length ? state.menuItems.push(action.payload) : (() => {
                const objectIndex = state.menuItems.findIndex(item => item.id === action.payload[0].id);
                objectIndex < 0 ? state.menuItems.push(action.payload) : (() => {
                    state.menuItems[objectIndex].price = action.price;
                })();
            })();
        },
        deleteMenuItem(state, action) {
            !state.menuItems.length ? (() => { })() : (() => {
                const objectIndex = current(state).menuItems.findIndex(item => item.id === action.payload.id)
                objectIndex < 0 ? (() => { })() : state.menuItems.splice(objectIndex, 1);
            })();
        }
    }
})

const expenseSlice = createSlice({
    name: "expense",
    initialState: { "expenseItems": [] },
    reducers: {
        addExpenseItem(state, action) {
            !state.expenseItems.length ? state.expenseItems.push(action.payload) : (() => {
                const objectIndex = state.expenseItems.findIndex(item => item.id === action.payload[0].id);
                objectIndex < 0 ? state.expenseItems.push(action.payload) : (() => {
                    state.expenseItems[objectIndex].price = action.price;
                })();
            })();
            //also save to server;
        },
        deleteExpenseItem(state, action) {
            !state.expenseItems.length ? (() => { })() : (() => {
                const objectIndex = current(state).expenseItems.findIndex(item => item.id === action.payload.id);
                objectIndex < 0 ? (() => { })() : state.expenseItems.splice(objectIndex, 1);
            })();
            //also detele from server;
        }

    }
});

const orderSlice = createSlice({
    name: "order",
    initialState: {
        "orderItems": []
    },
    reducers: {
        addOrderItem(state, action) {
            !state.orderItems.length ? state.orderItems.push({ "id": action.payload.id, "itemName": action.payload.itemName, "unitPrice": action.payload.unitPrice, "quantity": 1 })
                :
                (() => {
                    const objectIndex = current(state).orderItems.findIndex(item => item.id === action.payload.id);
                    objectIndex < 0 ? state.orderItems.push({ "id": action.payload.id, "itemName": action.payload.itemName, "unitPrice": action.payload.unitPrice, "quantity": 1 })
                        :
                        state.orderItems[objectIndex].quantity++;
                })();
            console.log("from order slice add item reducer", current(state).orderItems);
        },
        removeOrderItem(state, action) {
            !state.orderItems.length ? (() => { })()
                :
                (() => {
                    const objectIndex = current(state).orderItems.findIndex(item => item.id === action.payload.id);
                    console.log("Object Index:", objectIndex);
                    objectIndex < 0 ? (() => { })()
                        :
                        (() => {
                            current(state).orderItems[objectIndex].quantity <= 1 ? state.orderItems.splice(objectIndex, 1) :
                                state.orderItems[objectIndex].quantity = current(state).orderItems[objectIndex].quantity - 1;
                        })();
                })();
            console.log("from order slice remove item reducer", current(state).orderItems);

        }
    }
})

//configure the store 
const store = configureStore({
    reducer: {
        // overview: overviewSlice.reducer,
        visible: visiblitySlice.reducer,
        menu: menuSlice.reducer,
        expense: expenseSlice.reducer,
        order: orderSlice.reducer
    }
});


//export the actions of the slices as well
export const visibilityActions = visiblitySlice.actions;
export const menuActions = menuSlice.actions;
export const expenseActions = expenseSlice.actions;
export const orderActions = orderSlice.actions;
// export const overviewActions = menuSlice.actions;

export default store;