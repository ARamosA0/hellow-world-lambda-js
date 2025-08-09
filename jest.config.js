const config = {
  testEnviroment: "node",
  testMatch: ["**/test/**/*.js"],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  verbose: true
}

module.exports = config
