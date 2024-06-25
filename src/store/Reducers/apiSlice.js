import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
    baseUrl:"http://localhost:5000",
    credentials:"include"
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['user'],
    endpoints:(builder) => ({})
})