/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '.env.local' })

module.exports = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  documents: 'src/gql/**/*.ts',
  generates: {
    'src/__generated__/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        avoidOptionals: true,
        maybeValue:
          'T extends PromiseLike<infer U> ? Promise<U | undefined> : T | undefined',
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
      config: { minify: true },
    },
  },
}
