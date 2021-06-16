import db from "../../db"
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

var params = {
    TableName: serverRuntimeConfig.tableName,
    Select: "ALL_ATTRIBUTES"
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { Items } = await db.scan(params)
        res.status(200).json(Items)
    } else {
        res.status(200).json({ msg: 'John Doe' })
    }
}
  