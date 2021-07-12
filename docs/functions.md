## Functions

<dl>
<dt><a href="#getColumnClassNames">getColumnClassNames(width)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#getGradientClassName">getGradientClassName(bool)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#getThemeClassName">getThemeClassName(str)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#joinClassNames">joinClassNames()</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<a name="getColumnClassNames"></a>

## getColumnClassNames(width) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - an array of className strings  

| Param | Description |
| --- | --- |
| width | can be 'auto', a number representing a fraction of 12, or an object representing values at specific breakpoints: xs, sm, md, lg, xl, xxl. The default is an object with `sm: 'auto'`. |

**Example**  
```js
const width = {
  md: 5 / 6,
  lg: 2 / 3,
  xl: 1 / 2,
  xxl: 1 / 3
}
const columnClassNames = getColumnClassNames(width)
;<div className='row'>
   <div className={columnClassNames.join(' ')} style={{border: '1px solid black'}}>
     <p>width: <code>{JSON.stringify(width)}</code></p>
     <p>returns: <code>{JSON.stringify(columnClassNames)}</code></p>
   </div>
 </div>
```
<a name="getGradientClassName"></a>

## getGradientClassName(bool) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - 'bg-gradient' if bool, else empty  

| Param | Type |
| --- | --- |
| bool | <code>bool</code> | 

<a name="getThemeClassName"></a>

## getThemeClassName(str) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - `pxn-theme-${str}`  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="joinClassNames"></a>

## joinClassNames() ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - arguments joined by space  
