import { createSlice, current } from "@reduxjs/toolkit";

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
        },
        removeOrderItem(state, action) {
            !state.orderItems.length ? (() => { })()
                :
                (() => {
                    const objectIndex = current(state).orderItems.findIndex(item => item.id === action.payload.id);
                    objectIndex < 0 ? (() => { })()
                        :
                        (() => {
                            current(state).orderItems[objectIndex].quantity <= 1 ? state.orderItems.splice(objectIndex, 1) :
                                state.orderItems[objectIndex].quantity = current(state).orderItems[objectIndex].quantity - 1;
                        })();
                })();

        },
        resetOrders(state) {
            state.orderItems = [];
        }
    }
});
export default orderSlice;