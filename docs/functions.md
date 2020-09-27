## Functions

<dl>
<dt><a href="#getClassesForColumn">getClassesForColumn(width)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#getClassesForTheme">getClassesForTheme(name)</a> ⇒ <code>array</code></dt>
<dd></dd>
</dl>

<a name="getClassesForColumn"></a>

## getClassesForColumn(width) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - an array of className strings  

| Param | Description |
| --- | --- |
| width | can be 'auto', a number representing a fraction of 12, or an object representing values at specific breakpoints: xs, sm, md, lg, xl. The default is an object with `sm: 'auto'`. |

**Example**  
```js
const width = {
  md: 5 / 6,
  lg: 2 / 3,
  xl: 1 / 2
}
const columnClassNames = getClassesForColumn(width)
;<div className='row'>
   <div className={columnClassNames.join(' ')} style={{border: '1px solid black'}}>
     <p>width: <code>{JSON.stringify(width)}</code></p>
     <p>returns: <code>{JSON.stringify(columnClassNames)}</code></p>
   </div>
 </div>
```
<a name="getClassesForTheme"></a>

## getClassesForTheme(name) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - an array of className strings  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | can be: blue, primary, dark, gray, grey, secondary, green, success, light, yellow, warning, red, danger, teal, info, white, transparent |

**Example**  
```js
const name = 'primary'
const columnClassNames = getClassesForTheme(name)
;<div className={columnClassNames.join(' ')}>
   <p>name: <code className='text-light'>{JSON.stringify(name)}</code></p>
   <p>returns: <code className='text-light'>{JSON.stringify(columnClassNames)}</code></p>
 </div>
```
