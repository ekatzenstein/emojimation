module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Emojimation',
      externals: {
        react: 'React'
      }
    }
  }
}
