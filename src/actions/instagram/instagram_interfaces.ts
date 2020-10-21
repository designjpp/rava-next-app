import { InstagramTypes } from '../types';

export interface InstagramFeed {
  imageUrl: string
  caption: string
  url: string
}

export interface FetchInstagram {
  type: InstagramTypes.fetchInstagram;
  payload: InstagramFeed;
}
