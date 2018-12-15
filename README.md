# Express Downstream

A simple server which prints out information about the request including the path, method, headers and environment.

It is often used as a Docker container when setting up proxy configurations.

```
npm install
NAME='Hello!' PORT=8000 DEBUG=express-downstream,express-downstream:debug node bin/downstream.js
```

## Changelog

### 0.1.1 2018-12-15

* Added a `NAME` environment variable defaulting to `Express Downstream`

### 0.1.0

* Initial release
