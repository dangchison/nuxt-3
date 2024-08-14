import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt([
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    ignores: ['assets/**/*', 'node_modules/**/*'],
    rules: {
      'nuxt/prefer-import-meta': 'error',
    },
  },
])
