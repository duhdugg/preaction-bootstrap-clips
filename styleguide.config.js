const path = require('path')
const pkg = require('./package.json')
module.exports = {
  require: [path.resolve(__dirname, 'styleguide.imports.js')],
  styleguideDir: 'styleguide/v5',
  version: pkg.version,
  sections: [
    { name: 'Introduction', content: 'docs/introduction.md' },
    { name: 'Getting Started', content: 'docs/getting-started.md' },
    { name: 'Components', components: 'src/components/*.jsx' },
    { name: 'Functions', content: 'docs/functions.md' }
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css'
        }
      ]
    }
  },
  exampleMode: 'expand',
  usageMode: 'expand'
}
