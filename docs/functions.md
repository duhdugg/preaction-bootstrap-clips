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
