module.exports = {
  watch: {
    js: {
      //NOTE: The below route should be outside node_modules
      files: ['../../../components/**/**.jsx'],
      tasks: ['compile:js'],
      options: {
        spawn: false,
        interrupt: true,
        event: ['all'],
      }
    },
    css: {
      //NOTE: The below route should be outside node_modules
      files: ['../../../components/**/**.css'],
      tasks: ['compile:css'],
      options: {
        spawn: false,
        interrupt: true,
        event: ['all'],
      }
    },
  },
  exec: {
      babelSrc: { cmd: './node_modules/@babel/cli/bin/babel.js ../../../src/styleguide.jsx --out-dir ../../../src' },
      webpack: { cmd: './node_modules/webpack/bin/webpack.js' },
  },
  concat: {
    css: {
    //NOTE: The below routes should be outside node_modules
      src: ['../../../components/**/**.css'],
      dest: '../../../src/styleguide.css'
    },
    js: {
    //NOTE: The below routes should be outside node_modules
      src: ['../../../components/**/**.jsx'],
      dest: '../../../src/styleguide.jsx'
    },
  },
  uglify: {
    js: {
      files: { '../../../dist/styleguide.min.js': ['../../../src/styleguide.js'] }
    }
  },
  cssmin: {
    css: {
      files: { '../../../dist/styleguide.min.css': ['../../../src/styleguide.css'] }
    }
  }
}
