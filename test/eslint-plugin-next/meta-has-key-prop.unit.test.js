const rule = require('@next/eslint-plugin-next/lib/rules/meta-has-key-prop')

const RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
})

const warningMessage =
  'Add a `key` property on the `meta` tag to avoid duplicate tags. See: https://nextjs.org/docs/messages/meta-has-key-prop'

const ruleTester = new RuleTester()
ruleTester.run('meta-has-key-prop', rule, {
  valid: [
    {
      code: `import Head from 'next/head';

      export default function TestPage() {
        return (
          <Head>
            <meta property="og:title" content="My page title" key="title" />
          </Head>
        )
      }`,
    },
    {
      code: `import Head from 'next/head';

      export default function TestPage() {
        return (
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
        )
      }`,
    },
  ],
  invalid: [
    {
      code: `import Head from 'next/head';

      export default function TestPage() {
        return (
          <Head>
            <meta property="og:title" content="My page title" />
          </Head>
        )
      }`,
      errors: [
        {
          message: warningMessage,
          type: 'JSXElement',
        },
      ],
    },
  ],
})
