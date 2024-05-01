import CartSlice from "./Slice/CartSlice";
import {configureStore} from "@reduxjs/toolkit"


export const Store = configureStore({
    reducer: {
        cart:CartSlice,
    }
})