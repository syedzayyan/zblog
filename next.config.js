module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
    serverRuntimeConfig: {
      accessKey: process.env.DB_ACCESS_KEY_ID,
      secretKey: process.env.DB_SECRET_ACCESS_KEY,
      region: process.env.REGION,
      tableName: process.env.TABLE_NAME,
      bucketName: process.env.BUCKET_NAME,
      hashAdmin: process.env.HASH_ADMIN,
      appSecret: process.env.APPLICATION_SECRET,
    },
}