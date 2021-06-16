import { withIronSession } from "next-iron-session";
import db from "../../db";
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const { id } = req.body;
      var params = {
        TableName: serverRuntimeConfig.tableName,
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
    cookieName: "SYEDZAYYAN",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: serverRuntimeConfig.appSecret
  }
);



