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
  <Alert theme='dark'>dark</Alert>
  <Alert theme='light'>light</Alert>
  <Alert theme='secondary'>secondary</Alert>
  <Alert
    theme='light'
    header='light'
    style={{
      container: {
        padding: '0.25em',
        backgroundImage:
          'linear-gradient(to top left, black, var(--red), transparent, var(--blue), transparent)'
      },
      alert: { marginBottom: 0 }
    }}>
    with header and custom style
  </Alert>
```
