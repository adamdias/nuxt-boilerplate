import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off'
    }
  }
]
