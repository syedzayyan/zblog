import { withIronSession } from "next-iron-session";
import db from "../../db";
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const { values } = req.body;
      var params = {
        TableName: serverRuntimeConfig.tableName,
        Item: {
          POST_ID : values.slug,
          TAG : values.tags,
          TITLE  : values.title,
          CONTENT : values.markdown,
          CREATED_AT : JSON.stringify(new Date()),
          STATUS : values.status,
          HEADER_IMAGE : values.headerImage,
          DESC : values.desc,
          MAILED_STATUS : values.mailedStatus,
        },
      }
      db.put(params)
      res.status(200).json(params.Item);
    } else {
      return res.status(405).send("Method Not Allowed");
    }
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: serverRuntimeConfig.appSecret
  }
);



