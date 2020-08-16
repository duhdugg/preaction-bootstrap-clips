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
          href:
            'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css'
        }
      ]
    }
  },
  exampleMode: 'expand',
  usageMode: 'expand'
}
