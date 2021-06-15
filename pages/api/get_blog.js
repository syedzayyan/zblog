import { client } from "../../db"

var params = {
    TableName: "BLOG_Z",
    Select: "ALL_ATTRIBUTES"
};

export default function handler(req, res) {
    if (req.method === 'GET') {
        client.scan(params, (err, data) => {
            if (err) {
                res.status(500).json(data)
            }
            return res.status(200).json(data.Items)
        })
    } else {
        res.status(200).json({ msg: 'John Doe' })
    }
}
  