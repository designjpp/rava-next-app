//import { NextApiRequest, NextApiResponse } from 'next'
//import userInstagram from 'user-instagram'
import instagrammer from "instagrammer"

export const instaFeed = instagrammer.profile(`${process.env.INSTAGRAM_USERNAME}`)
.then(res => res)


/*export const instaFeed =  userInstagram(`${process.env.INSTAGRAM_USERNAME}`)
  .then(({ data }) => data)
  .catch(console.error)
*/
/*
const instaFeed = () =>(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
      const response = await userInstagram(`${process.env.INSTAGRAM_USERNAME}`, {
        headers: req.headers
      })
        .then(({ data }) => data)
        .catch(console.error)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(response))
    } else {
      res.statusCode = 404
      res.end()
    }
  }
)
export default instaFeed*/