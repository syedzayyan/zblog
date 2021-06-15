import aws from 'aws-sdk';

export default async function handler(req, res) {
  aws.config.update({
    accessKeyId: process.env.DB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
    region: process.env.REGION,
    signatureVersion: 'v4',
  });

  const s3 = new aws.S3();
  var opts = { Bucket: process.env.BUCKET_NAME };
  
  await s3.listObjectsV2(opts, (err, data) => {
    if (err){
        res.status(404).json({"msg":"problem"});
    }
    var sendArr = [];
    data.Contents.map((datum, ind) => {
        const key = datum.Key;
        sendArr.push({filename : key, fileURL : `https://${process.env.BUCKET_NAME}.s3.${process.env.REGION}.amazonaws.com/${key}`})
    })
    res.status(200).json(sendArr);
  })
}