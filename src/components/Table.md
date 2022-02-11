### Table Examples

```jsx
function UserTableExample() {
  const [userHeaders] = React.useState(
    new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
      .set('company', 'Company')
  )
  const [users, setUsers] = React.useState([])

  // fetch rows from API
  React.useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.status === 200) {
      const data = await response.json()
      const users = []
      for (let u = 0; u < data.length; u++) {
        users.push(Object.assign(data[u], { company: data[u].company.name }))
      }
      setUsers(users)
    }
  }, [])

  // render
  return (
    <div className='app'>
      <h4>User Table</h4>
      <hr />
      <Table
        headers={userHeaders}
        rows={users}
        theme='light'
        hover
        responsive
        rowKey='id'
        extendRow={row => ({
          email: (
            <a href={`mailto:${row.email}`} onClick={e => e.preventDefault()}>
              {row.email}
            </a>
          ),
          view: (
            <button
              type='button'
              className='btn btn-sm btn-secondary'
              onClick={() => console.log(row)}>
              View
            </button>
          ),
          website: (
            <a
              href={`https://${row.website}`}
              target='_blank'
              rel='noopener noreferrer'
              onClick={e => e.preventDefault()}>
              {row.website}
            </a>
          )
        })}
        filter
        sort={['id', 'name', 'email', 'phone', 'website', 'company']}
        search
        defaultSortKey='id'
      />
    </div>
  )
}
;<UserTableExample />
```

```jsx
function PhotoTableExample() {
  const [userHeaders] = React.useState(
    new Map().set('id', 'ID').set('title', 'Title').set('url', 'Image')
  )
  const [photos, setPhotos] = React.useState([])

  // fetch rows from API
  React.useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    if (response.status === 200) {
      const data = await response.json()
      setPhotos(data)
    }
  }, [])

  // render
  return (
    <div className='app'>
      <h4>Photo Table</h4>
      <hr />
      <Table
        headers={userHeaders}
        rows={photos}
        theme='light'
        striped
        responsive
        compact
        rowKey='id'
        sort={['id', 'title']}
        search={['title']}
        defaultSortKey='id'
        extendRow={row => ({
          url: (
            <div
              style={{ width: '5rem', height: '5rem' }}
              className='img-thumbnail'>
              <a href={row.url} target='_blank' rel='noopener noreferrer'>
                <img src={row.thumbnailUrl} width='100%' height='100%' />
              </a>
            </div>
          )
        })}
        pagination={4}
      />
    </div>
  )
}
;<PhotoTableExample />
```

```jsx
function CommentTableExample() {
  const [postHeaders] = React.useState(
    new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('user', 'User')
      .set('title', 'Title')
  )
  const [posts, setPosts] = React.useState([])
  const [users, setUsers] = React.useState([])

  // fetch rows from API
  React.useEffect(async () => {
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )
    if (usersResponse.status === 200) {
      const usersData = await usersResponse.json()
      const users = usersData
      setUsers(users)
      const postsResponse = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      )
      if (postsResponse.status === 200) {
        const postsData = await postsResponse.json()
        const posts = []
        for (let p = 0; p < postsData.length; p++) {
          const post = postsData[p]
          posts.push(
            Object.assign({}, post, {
              user: users.find(user => user.id === post.userId).email
            })
          )
        }
        setPosts(posts)
      }
    }
  }, [])

  // render
  return (
    <div className='app'>
      <h4>Post Table</h4>
      <hr />
      <Table
        headers={postHeaders}
        rows={posts}
        theme='light'
        hover
        responsive
        rowKey='id'
        pagination={5}
        extendRow={row => ({
          view: (
            <button
              type='button'
              className='btn btn-sm btn-secondary'
              onClick={() => console.log(row)}>
              View
            </button>
          )
        })}
        filter={['id', 'user']}
        sort={['id', 'user', 'title']}
        defaultSortKey='title'
        search
      />
    </div>
  )
}
;<CommentTableExample />
```
