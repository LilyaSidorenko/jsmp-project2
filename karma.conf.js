const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    colors: true,
    client: {
      clearContext: false
    },
    failOnEmptyTestSuite: false,
    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html', subdir: 'html' }
      ],
    },
    frameworks: [
      'jasmine',
    ],
    files: [
      'tests/tests.index.js',
    ],
    preprocessors: {
      'tests/tests.index.js': ['webpack', 'sourcemap'],
      'tests/module.spec.js': ['webpack', 'sourcemap']
    },
    reporters: config.coverage ? ['progress', 'coverage'] : ['progress', 'kjhtml'],

    webpack: webpackConfig,
    singleRun: true


  });
};
