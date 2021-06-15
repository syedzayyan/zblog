import { withIronSession } from "next-iron-session";
import db from "../../db";

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const { id } = req.body;
      var params = {
        TableName: 'BLOG_Z',
        Key: {
          POST_ID : id,
        },
      }
      db.delete(params, (err, resp) => {
        if (err) {
          console.log(err)
        } else {
          return res.status(200).send(resp)
        }
      })
      return res.status(200).send("Method Allowed");
    } else {
      return res.status(405).send("Method Not Allowed");
    }
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);



