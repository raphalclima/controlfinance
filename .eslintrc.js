module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.js', '.jsx'],
      },
    ],
    'import/extensions': [
      'error', 
      'never',
      {
        '.js': 'never',
        '.jsx': 'never',
        '.ts': 'never',
        '.tsx': 'never'
      }
    ],
    'import/prefer-default-export': 'off',
    "no-unused-expressions": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    "@typescript-eslint/no-unused-expressions": ["error"],
    'spaced-comment': ['error', 'always', {
        'line': {
          'markers': ['/'],
          'exceptions': ['-', '+']
        },
        'block': {
          'markers': ['!'],
          'exceptions': ['*'],
          'balanced': true
        }
      }
    ],
    'linebreak-style': [0, 'error', 'windows'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx,'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};