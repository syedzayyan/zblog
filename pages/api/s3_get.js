import aws from 'aws-sdk';
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default async function handler(req, res) {
  aws.config.update({
    accessKeyId: serverRuntimeConfig.accessKey,
    secretAccessKey: serverRuntimeConfig.secretKey,
    region: serverRuntimeConfig.region,
    signatureVersion: 'v4',
  });

  const s3 = new aws.S3();
  var opts = { Bucket: serverRuntimeConfig.bucketName };
  
  const responseAWS = await s3.listObjectsV2(opts).promise()
  var sendArr = [];
  responseAWS.Contents.map((datum, ind) => {
    const key = datum.Key;
    sendArr.push({filename : key, fileURL : `https://${serverRuntimeConfig.bucketName}.s3.${serverRuntimeConfig.region}.amazonaws.com/${key}`})
  })
  res.status(200).json(sendArr)
}