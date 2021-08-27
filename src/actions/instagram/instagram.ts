import { Dispatch } from 'redux';
import { instaFeed } from '../../utils/instagram';
import { FetchInstagram } from './instagram_interfaces';
import { InstagramTypes } from '../types';
//import instagrammer from "instagrammer"

//export const instaFeed = instagrammer.profile(`${process.env.INSTAGRAM_USERNAME}`).then(({ data }) => JSON.stringify(data));

export const fetchInstagram = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await instaFeed;
      dispatch<FetchInstagram>({
        type: InstagramTypes.fetchInstagram,
        payload: response
      });
    } catch (error) {
      console.log(error);
    }
  };
};
