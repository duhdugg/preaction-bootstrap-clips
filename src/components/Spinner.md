### Spinner Examples

```jsx
<div className='container'>
  <div className='row'>
    <Card column>
      <Spinner />
    </Card>
    <Card column>
      <Spinner type='grow' />
    </Card>
    <Card column className='text-primary'>
      <Spinner>Please wait...</Spinner>
    </Card>
  </div>
  <div className='row'>
    <Card column>
      <Spinner
        type='grow'
        flexDirection='column'
        size='3'
        fontSize='0.85'
        className='custom-style'>
        Please wait...
      </Spinner>
      <style>
        {`
        .pxn-spinner-container.custom-style {
          color: var(--bs-indigo);
        }
      `}
      </style>
    </Card>
  </div>
</div>
```
