### Boilerplate Example

```jsx
import { NavBar } from './NavBar.jsx'
import { Card } from './Card.jsx'
;<Boilerplate
  jumbotron={
    <h1 className='display-4'>Preaction Boostrap Clips: Boilerplate Example</h1>
  }
  navBar={
    <NavBar
      menu={[]}
      brand={{
        name: 'Test',
        onClick: event => {
          event.preventDefault()
        }
      }}
      theme='dark'
    />
  }
  footer='Copyright 2018-2020 © Doug Elkin. All rights reserved.'
  style={{ footer: { marginTop: '1.5em' } }}>
  <Card>
    <strong>Main Content</strong>
  </Card>
</Boilerplate>
```
