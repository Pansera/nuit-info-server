/**
 * NodeGard
 * @author Yann SEGET <dev@leafgard.fr>
 */

module.exports = new ( class WebServer {

  /**
   * (Requires the packages and) Instanciate the main components and variables
   */
  constructor() {
    const express = require('express')
    this.app = express()
    this.app.set('view engine', 'ejs')
    this.app.set('views', __dirname + '/views')
    this.app.use(express.static(__dirname + '/assets'))
    this.webPort = process.env.WEB_PORT || 3000
  }

  /**
   * Prepares the module to be runned (Settings, routes, etc..)
   * @returns {Promise} Resolve = module prepared, reject = problem while preparing module
   */
  prepare() {
    return new Promise((resolve, reject) => {
      this.app.get('/', (req, res) => {
        res.render('index')
      })
      this.app.get('/about', (req, res) => {
        res.render('about')
      })
      resolve()
    })
  }

  /**
   * Runs the module (Listening, etc..)
   */
  run() {
    this.app.listen(this.webPort, () => {
      console.log(`Example app listening on port ${this.webPort}!`)
    })
  }

} )