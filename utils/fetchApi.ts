import { axiosInternal } from './axios';

export const baseUrl = 'https://moviesdatabase.p.rapidapi.com';

export const fetchApi = async (url: string, seconds?: number) => {
  const delayedSeconds = Math.floor(Math.random() * 5);

  const res = await axiosInternal.get(`/api/movie?${url}`);

  return await new Promise((resolve) =>
    setTimeout(() => resolve(res.data), 1000 * (seconds || delayedSeconds)),
  );
};
