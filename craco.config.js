const CracoAlais = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlais,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
}
