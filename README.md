# try-infinitely

## Usage

```js
import tryInfinitely from 'try-infinitely'

tryInfinitely(someFunctionThatThrowsError)

tryInfinitely(someFunctionThatThrowsError, 1000)
```

and 

```js
import { tryUntilTruthy } from 'try-infinitely'

// subject to changes
var someVal = false

tryUntilTruthy(someVal, callback)
```

```js
// the default tryUntilTruthy doesn't invoke the callback once `someVal` is truthy
// if you want to invoke the callback *once* after the value becomes true
// you could do:
import { createTryUntilTruthy } from 'try-infinitely'
var tryUntilTruthy = createTryUntilTruthy(true)

tryUntilTruthy(someVal, callback)
```
