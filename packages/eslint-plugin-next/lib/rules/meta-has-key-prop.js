module.exports = {
  meta: {
    docs: {
      description:
        'Add a `key` property on the `meta` tag to avoid duplicate tags',
      recommended: true,
    },
  },
  create: function (context) {
    return {
      JSXElement(node) {
        if (
          node.openingElement &&
          node.openingElement.name &&
          node.openingElement.name.name !== 'meta'
        ) {
          return
        }

        const attributes = node.openingElement.attributes

        /** Duplicate `name` attributes are handled automatically. */
        if (attributes.some((attribute) => attribute.name.name === 'name')) {
          return
        }

        if (!attributes.some((attribute) => attribute.name.name === 'key')) {
          context.report({
            node,
            message:
              'Add a `key` property on the `meta` tag to avoid duplicate tags. See: https://nextjs.org/docs/messages/meta-has-key-prop',
          })
        }
      },
    }
  },
}
