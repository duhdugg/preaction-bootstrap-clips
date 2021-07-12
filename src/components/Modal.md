### Modal Example

```jsx
const [showModal, setShowModal] = React.useState(false)
;<Boilerplate
  footer={
    <Modal
      show={showModal}
      setShow={setShowModal}
      headerTheme='indigo'
      headerGradient
      title='Modal Title'
      closeButtonText='Cancel'
      footer={
        <div className='btn-group'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={() => {
              setShowModal(false)
            }}>
            Cancel
          </button>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => {
              setShowModal(false)
            }}>
            Save
          </button>
        </div>
      }>
      Modal content goes here
    </Modal>
  }>
  <button
    type='button'
    className='btn btn-primary btn-lg'
    onClick={e => {
      setShowModal(true)
    }}>
    Show Modal
  </button>
</Boilerplate>
```
