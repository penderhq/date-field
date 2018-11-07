module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'DateField',
      externals: {
        react: 'React'
      }
    }
  }
}
