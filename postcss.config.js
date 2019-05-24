module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-flexbugs-fixes': {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['postcss-'],
      minPixelValue: 2,
      mediaQuery: false
    }
  }
}
