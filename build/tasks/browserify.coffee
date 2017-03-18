module.exports = ->
  @loadNpmTasks 'grunt-browserify'

  # This task uses the Browserify optimizer and the Babelify transform to
  # optimize the ES6 modules.
  @config 'browserify',
    options:
      transform: [
        ['combynify', root: './app/js/views']
        'babelify'
      ]
      watch: true

    development:
      options:
        browserifyOptions:
          debug: true

      src: 'app/js/index.js'
      dest: 'dist/js/source.js'

    production:
      options:
        configure: (bundler) ->
          bundler.transform(global: true, 'uglifyify')

      src: 'app/js/index.js'
      dest: 'dist/js/source.min.js'

    testing:
      src: 'test/runner.js'
      dest: 'dist/js/test-runner.js'
