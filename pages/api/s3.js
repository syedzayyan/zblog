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
  const post = await s3.createPresignedPost({
    Bucket: serverRuntimeConfig.bucketName,
    Fields: {
      key: req.query.file,
    },
    ACL:'public-read',
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 7048576], // up to 1 MB
    ],
  });

  res.status(200).json(post);
}