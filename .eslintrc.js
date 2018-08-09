module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': ['error', { 'allow': ['state', 'getters'] }],
    'no-param-reassign': [2, { 'props': false }],
    'no-underscore-dangle': ['error', { 'allow': ['_vm'] }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}