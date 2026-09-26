
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: []
}

const readingListSlice = createSlice({
    name: 'readingList',
    initialState,
    reducers: {
        addArticle (state, action) {
            const articleExist = state.articles.some (
                (article) => article.key === action.payload.key
            )

            if (!articleExist) {
                state.articles.push (action.payload)
            }
        },


        removeArticle (state, action) {
            state.articles = state.articles.filter (
                (article) => article.key !== action.payload
            )
        }
    }
})

export const { addArticle, removeArticle } = readingListSlice.actions

export default readingListSlice.reducer