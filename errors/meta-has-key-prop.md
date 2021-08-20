# Add a `key` property on the `meta` tag to avoid duplicate tags

## Why This Error Occurred

`meta` tags require a `key` property to ensure the tag is only rendered once.

## Possible Ways to Fix It

Add a `key` property on the `meta` tag.

```jsx
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <main>
        <h1>Hello world!</h1>
      </main>
    </>
  )
}
```

In this example, only the second `<meta property="og:title" />` is rendered. `meta` tags with duplicate `name` attributes are automatically handled.

## Useful links

- [Docs for Next.js Head component](https://nextjs.org/docs/api-reference/next/head)
