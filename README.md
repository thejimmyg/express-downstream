# Express Downstream

A simple server which prints out information about the request including the path, method, headers and environment.

It is often used as a Docker container when setting up proxy configurations.


```
npm install
PATH_404=/404 PATH_500=/500 SCRIPT_NAME="" NAME='Hello!' PORT=8000 DEBUG=express-downstream node bin/express-downstream.js
```
With this setup, paths under `/404` always return 404, paths under `/500` return 500. Other paths return 200.

You can configure the following variables:

* `PORT` - port to bind to, default 80
* `NAME` - the heading of the page, default `Express Downstream`
* `SCRIPT_NAME` the path at which a 200 page should be returned, default `''`
* `PATH_404` the path at which express should always return a 404 page for any sub-path, if not specified, no 404 handler will be used
* `PATH_500` the path at which express should always return a 500 page for any sub-path, if not specified, no 500 handler will be used
* `DEBUG` - can be `express-downstream,express-downstream:debug` for full debugging, `express-downstream` for lkey messages, or empty for no debugging


## Changelog

### 0.1.3 2019-01-02

* Make the 404 and 500 paths configurable too
* Handle `SIGTERM`
* Changed default port to 80

### 0.1.2 2018-12-30

* Added support for the `SCRIPT_NAME` environment variable
* Made paths under `/404` return a 404 status code, and paths under `/500` return a 500 status

### 0.1.1 2018-12-15

* Added a `NAME` environment variable defaulting to `Express Downstream`

### 0.1.0

* Initial release
