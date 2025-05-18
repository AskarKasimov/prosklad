import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProfilePayload, SUserAuth, SUserLogin } from '../types';

export const projectAPI = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include', // для токена авторизации
  }),
  endpoints: (build) => ({
    register: build.mutation<void, SUserAuth>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation<void, SUserLogin>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    getMe: build.query<ProfilePayload, void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
    }),
    createProfile: build.mutation<void, ProfilePayload>({
      query: (params) => ({
        url: '/profile',
        method: 'POST',
        params,
      }),
    }),
    getProfile: build.query<any, void>({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),
    }),
    editProfile: build.mutation<void, ProfilePayload>({
      query: (params) => ({
        url: '/profile',
        method: 'PUT',
        params,
      }),
    }),
    deleteProfile: build.mutation<void, void>({
      query: () => ({
        url: '/profile',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetMeQuery,
  useCreateProfileMutation,
  useGetProfileQuery,
  useEditProfileMutation,
  useDeleteProfileMutation,
} = projectAPI;
