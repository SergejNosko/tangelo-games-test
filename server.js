const Koa = require('koa')
const fetch = require('isomorphic-fetch')
// const Router = require('koa-router')
require('es6-promise').polyfill()

const app = new Koa()
// const router = new Router()

app.use(async (ctx) => {
  const { querystring } = ctx

  const res = await fetch(`http://suggestqueries.google.com/complete/search?${querystring}`)
  const data = await res.json()
  ctx.response.body = data
})

app.listen(3000, (err) => {
  console.log('Server listens port: 3000')
})
