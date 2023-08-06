module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // see https://prettier.io/docs/en/options.html
        printWidth: 120, // 一行换行的最大长度，默认 80
        singleQuote: true, // 字符串是否使用单引号代替双引号，默认false，使用双引号。JSX quotes 会忽略这个选项
        semi: false, // 行尾是否加上分号，默认true，加上分号
        bracketSpacing: true, // 对象大括号直接是否有空格，默认为true。true: { foo: bar }，false: {foo: bar}
        // htmlWhitespaceSensitivity see https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
        htmlWhitespaceSensitivity: 'ignore', // 优化html闭合标签不换行的问题
      },
    ],
  },
}
