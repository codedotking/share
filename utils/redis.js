import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: 'https://apn1-well-shad-33597.upstash.io',
  token: '********',
})