import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'    // oluşturduğumuz slice dosyasının yolu. isim olarak Burada değişiklik yapıldı,istediğimiz isim ile belirtebiliriz.

export const store=configureStore({
    
        reducer:{
                todo:todoReducer
}

})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch