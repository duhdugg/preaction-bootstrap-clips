### Animated Button Example

```js
import { MdShoppingCart } from 'react-icons/md'
;<AnimatedButton
  onClick={event => {
    console.debug(event)
    alert('Well done!')
  }}>
  <MdShoppingCart />
  Checkout
</AnimatedButton>
```
