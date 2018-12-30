# Express Downstream

A simple server which prints out information about the request including the path, method, headers and environment.

It is often used as a Docker container when setting up proxy configurations.

Paths under `/404` always return 404, paths under `/500` return 500. Other paths return 200.

```
npm install
SCRIPT_NAME="" NAME='Hello!' PORT=8000 DEBUG=express-downstream,express-downstream:debug node bin/express-downstream.js
```

## Changelog

### 0.1.2 2018-12-30

* Added support for the `SCRIPT_NAME` environment variable
* Made paths under `/404` return a 404 status code, and paths under `/500` return a 500 status

### 0.1.1 2018-12-15

* Added a `NAME` environment variable defaulting to `Express Downstream`

### 0.1.0

* Initial release
