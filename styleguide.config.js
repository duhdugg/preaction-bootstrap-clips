const path = require('path')
module.exports = {
  require: [path.resolve(__dirname, 'styleguide.imports.js')],
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
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css'
        }
      ]
    }
  },
  exampleMode: 'expand',
  usageMode: 'expand'
}
