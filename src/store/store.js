
import { configureStore } from "@reduxjs/toolkit";
import readingListReducer from './readingListSlice'


const savedArticles =
    JSON.parse(localStorage.getItem('readingList')) ?? []

export const store = configureStore({
    reducer: {
        readingList: readingListReducer
    },

    preloadedState: {
        readingList: {
            articles: savedArticles
        }
    }
})


store.subscribe(() => {
    const articles = store.getState().readingList.articles

    localStorage.setItem(
        'readingList',
        JSON.stringify(articles)
    )
})