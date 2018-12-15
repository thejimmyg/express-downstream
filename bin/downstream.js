const express = require('express')
const debug = require('debug')('express-downstream')
const debugDebug = require('debug')('express-downstream:debug')
const app = express()
const mustache = require('mustache')
const port = process.env.PORT || 8000
const name = process.env.NAME || 'Express Downstream'

const template = `<html>
  <head>
    <title>{{name}} {{path}}</title>
    <style>dt {font-weight: bold; }</style>
  </head>
  <body>
    <h1>{{name}} <code>{{path}}</code></h1>
    <h2>Method</h2>
    <p><code>{{method}}</code></p>
    <h2>Headers</h2>
    <dl>
      {{#headers}}
      <dt><code>{{name}}</code></dt>
      <dd><code>{{value}}</code></dd>
      {{/headers}}
    </dl>
    <h2>Environment</h2>
    <dl>
      {{#environment}}
      <dt><code>{{name}}</code></dt>
      <dd><code>{{value}}</code></dd>
      {{/environment}}
    </dl>
    <p>Based on <a href="https://www.npmjs.com/package/express-downstream">express-downstream</a>.</p>
  </body>
</html>`

app.all('*', (req, res) => {
  const path = req.path
  debug(path)
  const method = req.method
  const headers = []
  for (let name in req.headers) {
    if (req.headers.hasOwnProperty(name)) {
      const value = req.headers[name]
      headers.push({ name, value })
    }
  }
  const environment = []
  for (let name in process.env) {
    if (process.env.hasOwnProperty(name)) {
      const value = process.env[name]
      environment.push({ name, value })
    }
  }
  const view = {
    name,
    path,
    method,
    headers,
    environment
  }
  const output = mustache.render(template, view)
  debugDebug(view)
  res.send(output)
})

process.on('SIGINT', function () {
  console.log('Exiting ...')
  process.exit()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
