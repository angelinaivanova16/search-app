import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type ResultsResponse = {
  results: Item[];
  length: number;
};

export type Item = {
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  primaryGenreName: string;
  country: string;
  trackPrice: number;
  currency: string;
};

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://itunes.apple.com/' }),
  endpoints: build => ({
    getItemBySearch: build.query<Item[], string>({
      query: (query: string) => {
        return `search?term=${query}`;
      },
      transformResponse: (response: ResultsResponse) => response.results,
    }),
  }),
  tagTypes: ['Recipes'],
})

export const {
  useGetItemBySearchQuery,
} = searchApi;