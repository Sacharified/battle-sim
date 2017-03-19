module.exports = ->
  @loadNpmTasks 'grunt-sass'

  # Minify the distribution CSS.
  @config 'sass',
    development:
      files:
        'app/styles/index.css': ['app/styles/sass/layout.scss']
