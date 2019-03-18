module.exports = {
  extends: ['umi'],
  plugins: ['markdown', 'react'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    APP_TYPE: true,
    page: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'react/sort-comp': 0,
    'no-else-return': 0,
    'import/prefer-default-export': 0,
    'react/no-children-prop': 1,
    'react/no-find-dom-node': 1,
    'class-methods-use-this': 1,
    'react/require-default-props': 1,
    'no-underscore-dangle': 1,
    'import/no-duplicates': 1,
    'no-nested-ternary': 1,
    'prefer-spread': 1,
    'no-unused-expressions': 1,
    'no-void': 1,
    'react/default-props-match-prop-types': 1,
    'no-restricted-globals': 1,
    'jsx-a11y/heading-has-content': 1,
    'react/no-array-index-key': 1,
    'react/jsx-indent': 1,
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'no-multi-assign': 1,
    'react/jsx-no-bind': 1,
    'no-lonely-if': 1,
    'no-fallthrough': 1,
    'react/jsx-closing-tag-location': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-indent-props': 1,
    'lines-between-class-members': 1,
    'no-prototype-builtins': 1,
    'react/button-has-type': 1,
    'import/no-useless-path-segments': 1,
    'no-useless-escape': 1,
    'import/order': 1,
    'no-extra-boolean-cast': 1,
    'spaced-comment': 1,
    'react/no-did-update-set-state': 1,
    'react/no-unused-prop-types': 1,
    'no-useless-return': 1,
    'import/newline-after-import': 1,
    'no-unneeded-ternary': 1,
    'jsx-a11y/alt-text': 1,
    'global-require': 1,
    'import/first': 1,
    'no-undef-init': 1,
    'no-useless-computed-key': 1,
    'operator-assignment': 1,
    'object-shorthand': 1,
    'react/jsx-curly-brace-presence': 1,
    'prefer-template': 1,
    'no-continue': 1,
    'jsx-a11y/anchor-has-content': 1,
    'compat/compat': 1,
    'react/destructuring-assignment': 1,
    'consistent-return': 1,
    'prefer-destructuring': 1,
    'no-param-reassign': 1,
    'no-return-assign': 1,
    'no-plusplus': 1,
    'react/no-access-state-in-setstate': 1,
    'react/no-multi-comp': 1,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'site/**',
          'tests/**',
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.md',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': { node: { extensions: ['.js', '.ts', '.tsx'] } },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/resolver': {
          node: {
            // Allow import and resolve for *.ts modules.
            extensions: ['.mjs', '.ts', '.tsx', '.d.ts', '.js', '.jsx'],
          },
        },
      },
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 1,
        '@typescript-eslint/no-empty-interface': 1,
        '@typescript-eslint/no-non-null-assertion': 1,
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 1,
        '@typescript-eslint/array-type': 1,
        '@typescript-eslint/no-inferrable-types': 1,
        '@typescript-eslint/prefer-interface': 1,
        '@typescript-eslint/ban-types': 1,
        '@typescript-eslint/camelcase': 1,
        '@typescript-eslint/interface-name-prefix': 1,
      },
    },
    {
      files: ['*.md'],
      globals: {
        React: true,
        ReactDOM: true,
        mountNode: true,
      },
      rules: {
        indent: 0,
        'no-console': 0,
        'eol-last': 0,
        'no-script-url': 0,
        'prefer-rest-params': 0,
        'react/no-multi-comp': 0,
        'jsx-a11y/href-no-hash': 0,
        'max-len': 0, // TODO: remove later
        'no-return-assign': 0, // TODO: remove later
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
