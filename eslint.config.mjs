import js from '@eslint/js'
import globals from 'globals'
import {defineConfig} from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  {plugins: {prettier: prettierPlugin}},
  {ignores: ['node_modules', 'dist']},
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  {
    files: ['**/*.js'],
    plugins: {js},
    extends: ['js/recommended'],
    rules: {
      ...eslintConfigPrettier.rules,
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
])
