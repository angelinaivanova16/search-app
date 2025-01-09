import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type ResultsResponse = {
  results: Item[];
  length: number;
};

export type Item = {
  trackId: number;
  artistName: string;
  trackName: string;
  primaryGenreName: string;
  trackPrice: number;
  trackViewUrl: string;
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
})

export const {
  useGetItemBySearchQuery,
} = searchApi;