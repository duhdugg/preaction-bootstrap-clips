Modals should be rendered conditionally based on application state. Once rendered, a modal will be on top of all other elements on the page. Use the `closeHandler` prop to allow exiting the modal. You may also add additional buttons to handle this inside the modal. See the example below.

### Modal Example

```jsx
const [showModal, setShowModal] = React.useState(false)
const closeHandler = () => {
  setShowModal(!showModal)
}
;<Boilerplate
  footer={
    showModal ? (
      <Modal
        title='Modal Title'
        closeButtonText='Cancel'
        closeHandler={closeHandler}
        footer={
          <div className='btn-group'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={closeHandler}>
              Cancel
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={closeHandler}>
              Save
            </button>
          </div>
        }>
        Modal content goes here
      </Modal>
    ) : (
      ''
    )
  }>
  <button
    type='button'
    className='btn btn-primary'
    onClick={e => {
      setShowModal(!showModal)
    }}>
    Show Modal
  </button>
</Boilerplate>
```
