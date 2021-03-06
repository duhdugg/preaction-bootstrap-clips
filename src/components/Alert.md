### Alert Examples

```jsx
  <Alert>info / default</Alert>
  <Alert theme='primary'>primary</Alert>
  <Alert theme='success' header='Success!'>
    with header
  </Alert>
  <Alert theme='warning' header={<em>Warning!</em>} />
  <Alert theme='danger' header='Error!'>
    You&apos;ve been doing it wrong.
  </Alert>
  <Alert theme='dark' gradient>dark with gradient</Alert>
  <Alert theme='light'>light</Alert>
  <Alert theme='secondary'>secondary</Alert>
  <Alert
    theme='light'
    header='light'
    className='wild-style'
    >
    with header and custom style
  </Alert>
  <style>{`
    .pxn-alert-container.wild-style {
      padding: 0.25em;
      background-image: linear-gradient(to top left, black,var(--bs-red), transparent, var(--bs-blue), transparent);
      margin-bottom: 1em;
    }
    .pxn-alert-container.wild-style .alert {
      margin-bottom: 0;
    }
  `}
  </style>
  <div className='row'>
    <Alert column width={3/4}>3/4 Column (all breakpoints)</Alert>
    <Alert column width={1/4}>1/4 Column (all breakpoints)</Alert>
  </div>
  <div className='row'>
    <Alert column width={{md: 3/4, lg: 1/2}}>1/2 column at lg breakpoint, 3/4 column at md breakpoint (try resizing the window, or inspect this element to see that it's using `col-md-9` and `col-lg-6`.</Alert>
  </div>
```
