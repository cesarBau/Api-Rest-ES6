module.exports = {
  CONTEXT_NAME: process.env.CONTEXT_NAME || 'example',
  VERSION: process.env.VERSION || 'v1',
  PORT: process.env.PORT || 3000,
  URI: process.env.URI || 'mongodb://127.0.0.1:27017/hola',
  DELAY: process.env.DELAY || 5000
}
