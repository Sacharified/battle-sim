module.exports = ->
  @loadNpmTasks 'grunt-contrib-watch'

  # This will watch the application for changes and automatically reload the
  # page using LiveReload.
  @config 'watch',
    development:
      options:
        spawn: false
        livereload: true

      tasks: ['browserify:development', 'sass:development']

      files: [
        'dist/source.js'
        'dist/test-runner.js'
        'app/js/**/*.js'
        'app/styles/**/*.scss'
        'index.html'
        'package.json'
      ]

