import aws from 'aws-sdk';
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export const client = new aws.DynamoDB.DocumentClient({
  accessKeyId: serverRuntimeConfig.accessKey,
  secretAccessKey: serverRuntimeConfig.secretKey,
  region: serverRuntimeConfig.region,
  params: {
    TableName: serverRuntimeConfig.tableName
  }
});

export default {
  get: (params) => client.get(params).promise(),
  scan: (params) => client.scan(params).promise(),
  put: (params) => client.put(params).promise(),
  query: (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise()
};