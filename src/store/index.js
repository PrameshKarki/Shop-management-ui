import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from './expenseSlice';
import menuSlice from './menuSlice';
import visibilitySlice from './visibilitySlice';
import orderSlice from './orderSlice';
import fullscreenSlice from './fullscreenSlice'
// import overviewSlice from './overviewSlice';

// const menuObjectArchetecture={ "id":12-, "itemName": 0, "price":0};
// const expenseObjectArchetecture = { "id":12,"itemName": 0, "quantity": 0, "price": 0 };
// const orderObjectArchetecture={ "id":12,"itemName": 0,"quantity":0, "unitPrice":0};
//configure the store 
const store = configureStore({
    reducer: {
        // overview: overviewSlice.reducer,
        visible: visibilitySlice.reducer,
        menu: menuSlice.reducer,
        expense: expenseSlice.reducer,
        order: orderSlice.reducer,
        fullscreen: fullscreenSlice.reducer
    }
});


//export the actions of the slices as well
export const visibilityActions = visibilitySlice.actions;
export const menuActions = menuSlice.actions;
export const expenseActions = expenseSlice.actions;
export const orderActions = orderSlice.actions;
export const fullscreenActions = fullscreenSlice.actions;
// export const overviewActions = menuSlice.actions;

export default store;