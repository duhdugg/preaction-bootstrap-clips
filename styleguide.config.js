module.exports = {
  sections: [
    { name: 'Install and Import', content: 'docs/usage.md' },
    { name: 'Components', components: 'src/components/*.jsx' }
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
