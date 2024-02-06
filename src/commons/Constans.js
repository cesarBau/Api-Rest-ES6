module.exports = {
  CONTEXT_NAME: process.env.CONTEXT_NAME || 'example',
  VERSION: process.env.VERSION || 'v1',
  PORT: process.env.PORT || 3000,
  URI: process.env.URI || 'mongodb://127.0.0.1:27017/pruebas',
  URI_REDIS: process.env.URI_REDIS || 'redis://127.0.0.1:6379',
  REDIS_TIME_EXPIRED: process.env.REDIS_TIME_EXPIRED || '600',
}
