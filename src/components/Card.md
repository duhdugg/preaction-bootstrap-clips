### Card Examples

```jsx
function getArray(length) {
  let array = []
  while (array.length < length) {
    array.push(+new Date() + ':' + Math.random())
  }
  return array
}
function getRandomTheme() {
  let themes = ['blue', 'green', 'yellow', 'red', 'dark', 'light']
  return themes[Math.floor(Math.random() * themes.length)]
}
;<Card
  header='Outer Card'
  headerTheme='yellow'
  headerGradient
  className='example-outer-card'>
  <div className='row'>
    {getArray(11).map((id, index) => (
      <Card
        key={index}
        column
        width='auto'
        theme={getRandomTheme()}
        className='rando-card'>
        <blockquote className='blockquote'>
          &quot;Here is my card.&quot;
        </blockquote>
      </Card>
    ))}
  </div>
  <div className='row'>
    <Card header='Here is a themed card with a header' column theme='dark' />
    <Card header='This one has a red head' column headerTheme='red' />
    <Card header='This one has a blue head' headerTheme='blue' column>
      <h4 className='display-4'>Woo!</h4>
    </Card>
    <Card
      header='This one has a green gradient head'
      headerTheme='green'
      bodyTheme='indigo'
      bodyGradient
      headerGradient
      column>
      with an indigo gradient body
    </Card>
  </div>
  <div className='row'>
    <Card
      header='This one has a yellow head'
      headerTheme='yellow'
      theme='dark'
      column>
      And a dark body and border!
    </Card>
    <Card header='This one is light' theme='light' width='auto' column>
      And automatically grows in width.
    </Card>
    <Card
      column
      headerTheme='dark'
      footerTheme='dark'
      bodyTheme='red'
      width={{ sm: 2 / 3, md: 1 / 4 }}
      header='and'
      footer='has a footer'>
      this one
    </Card>
  </div>
  <style>
    {`
    .example-outer-card .card {
      margin-bottom: 1rem;
    }
    .rando-card {
      min-width: 10rem;
    }
  `}
  </style>
</Card>
```
