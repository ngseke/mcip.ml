module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'standard-with-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',

  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json', 'tsconfig.eslint.json'],
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    'vue',
  ],
  rules: {
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-misused-promises': ['error', {
      checksVoidReturn: false,
    }],

    'vue/multi-word-component-names': 'off',
    'vue/html-quotes': 'off',
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/v-on-event-hyphenation': ['error', 'never', { autofix: true }],
    'vue/attribute-hyphenation': ['error', 'never'],
  },
}
