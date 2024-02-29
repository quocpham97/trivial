import axios from 'axios';

export const client = axios.create({
  baseURL: `https://moviesdatabase.p.rapidapi.com`,
});

export const axiosInternal = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
  headers: { 'Content-Type': 'application/json' },
});
