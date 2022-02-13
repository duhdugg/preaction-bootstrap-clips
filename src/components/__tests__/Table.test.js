import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Table, getRowKeyClassName } from '../Table.jsx'
import users from './data/users.json'

describe('basic tests', () => {
  test('renders empty', () => {
    const result = render(<Table />)
    expect(result.container.firstChild).toBeInTheDocument()
    expect(result.container.firstChild).toBeVisible()
  })

  test('renders column headers expectedly', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
      .set('companyName', 'Company')
    const headerKeys = Array.from(userHeaders.keys())
    const result = render(<Table headers={userHeaders} />)
    const thElements = result.container.querySelectorAll('table thead tr th')
    expect(thElements.length).toBe(headerKeys.length)
    for (let t = 0; t < thElements.length; t++) {
      expect(thElements[t].innerHTML).toBe(userHeaders.get(headerKeys[t]))
    }
  })

  test('renders the correct number of rows', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} rows={users} />)
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    expect(tbodyRows.length).toBe(users.length)
  })

  test('renders the correct number of columns', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
      .set('companyName', 'Company')
    for (const user of users) {
      user.companyName = user.company.name
    }
    const result = render(<Table headers={userHeaders} rows={users} />)
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    for (const row of tbodyRows) {
      const tds = row.querySelectorAll('td')
      expect(tds.length).toBe(Array.from(userHeaders.keys()).length)
    }
    expect(tbodyRows.length).toBe(users.length)
  })

  test('renders extended columns from extendRow prop', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('active', 'Active')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
      .set('companyName', 'Company')
    const extendRow = row => ({
      view: (
        <button type='button' className='btn btn-info view-btn'>
          View
        </button>
      ),
      active: (
        <input
          type='checkbox'
          checked={!!row.active}
          className='active-checkbox'
          readOnly
        />
      )
    })
    for (const user of users) {
      user.active = true
      user.companyName = user.company.name
    }
    const result = render(
      <Table headers={userHeaders} rows={users} extendRow={extendRow} />
    )
    const viewButtons = result.container.querySelectorAll(
      'table tbody tr td .view-btn'
    )
    expect(viewButtons.length).toBe(users.length)
    const activeCheckboxes = result.container.querySelectorAll(
      'table tbody tr td .active-checkbox'
    )
    expect(activeCheckboxes.length).toBe(users.length)
  })
})

describe('className tests', () => {
  test('renders .table-responsive when responsive prop is true', () => {
    const result = render(<Table />)
    expect(
      result.container.querySelector('.table-responsive')
    ).not.toBeInTheDocument()
    result.rerender(<Table responsive />)
    expect(
      result.container.querySelector('.table-responsive')
    ).toBeInTheDocument()
  })
  test('renders .table-striped when striped prop is true', () => {
    const result = render(<Table />)
    expect(
      result.container.querySelector('.table-striped')
    ).not.toBeInTheDocument()
    result.rerender(<Table striped />)
    expect(result.container.querySelector('.table-striped')).toBeInTheDocument()
  })
  test('renders .table-hover when hover prop is true', () => {
    const result = render(<Table />)
    expect(
      result.container.querySelector('.table-hover')
    ).not.toBeInTheDocument()
    result.rerender(<Table hover />)
    expect(result.container.querySelector('.table-hover')).toBeInTheDocument()
  })
  test('renders .table-sm when compact prop is true', () => {
    const result = render(<Table />)
    expect(result.container.querySelector('.table-sm')).not.toBeInTheDocument()
    result.rerender(<Table compact />)
    expect(result.container.querySelector('.table-sm')).toBeInTheDocument()
  })
  test('renders .table-{theme} when theme prop is a valid theme name', () => {
    const result = render(<Table />)
    const themeNames = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark'
    ]
    for (const theme of themeNames) {
      expect(
        result.container.querySelector(`.table-${theme}`)
      ).not.toBeInTheDocument()
      result.rerender(<Table theme={theme} />)
      expect(
        result.container.querySelector(`.table-${theme}`)
      ).toBeInTheDocument()
    }
  })
})

describe('sorting', () => {
  test('renders no sort buttons when sort is not passed', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} />)
    const sortBtns = result.container.querySelectorAll(
      'table thead tr th .pxn-sort-btn'
    )
    expect(sortBtns.length).toBe(0)
  })

  test('renders all sort buttons when sort is true', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} sort />)
    const sortBtns = result.container.querySelectorAll(
      'table thead tr th .pxn-sort-btn'
    )
    expect(sortBtns.length).toBe(Array.from(userHeaders.keys()).length)
  })

  test('renders select sort buttons when array is passed', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
      .set('companyName', 'Company')
    const sortKeys = ['id', 'name', 'email']
    const result = render(<Table headers={userHeaders} sort={sortKeys} />)
    const sortBtns = result.container.querySelectorAll(
      'table thead tr th .pxn-sort-btn'
    )
    expect(sortBtns.length).toBe(sortKeys.length)
    for (const key of sortKeys) {
      expect(
        result.container.querySelectorAll(
          `table thead tr th.${getRowKeyClassName(key)} .pxn-sort-btn`
        ).length
      ).toBe(1)
    }
  })

  test('renders rows sorted by defaultSortKey', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const sortBy = 'name'
    const result = render(
      <Table headers={userHeaders} rows={users} defaultSortKey={sortBy} />
    )
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    let latestAlpha = ''
    for (const row of tbodyRows) {
      const content = row.querySelector(
        `td.${getRowKeyClassName(sortBy)}`
      ).innerHTML
      expect(content >= latestAlpha).toBe(true)
      latestAlpha = content
    }
  })

  test('renders rows sorted by defaultSortKey in reverse when defaultRevSort is true', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const sortBy = 'name'
    const result = render(
      <Table
        headers={userHeaders}
        rows={users}
        defaultSortKey={sortBy}
        defaultRevSort
      />
    )
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    let latestAlpha = tbodyRows[0].querySelector(
      `td.${getRowKeyClassName(sortBy)}`
    ).innerHTML
    for (const row of Array.from(tbodyRows).slice(1)) {
      const content = row.querySelector(
        `td.${getRowKeyClassName(sortBy)}`
      ).innerHTML
      expect(content <= latestAlpha).toBe(true)
      latestAlpha = content
    }
  })

  test('renders rows sorted by clicked sort button', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const sortBy = 'name'
    const result = render(
      <Table headers={userHeaders} rows={users} sort defaultSortKey='id' />
    )
    const sortBtn = result.container.querySelector(
      `table thead tr th.${getRowKeyClassName(sortBy)} .pxn-sort-btn`
    )
    userEvent.click(sortBtn)
    result.rerender(
      <Table headers={userHeaders} rows={users} sort defaultSortKey='id' />
    )
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    let latestAlpha = ''
    for (const row of tbodyRows) {
      const content = row.querySelector(
        `td.${getRowKeyClassName(sortBy)}`
      ).innerHTML
      expect(content >= latestAlpha).toBe(true)
      latestAlpha = content
    }
  })

  test('renders rows sorted in reverse by clicking same sort button twice', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const sortBy = 'name'
    const result = render(
      <Table headers={userHeaders} rows={users} sort defaultSortKey='id' />
    )
    const rerender = () => {
      result.rerender(
        <Table headers={userHeaders} rows={users} sort defaultSortKey='id' />
      )
    }
    const sortBtn = result.container.querySelector(
      `table thead tr th.${getRowKeyClassName(sortBy)} .pxn-sort-btn`
    )
    userEvent.click(sortBtn)
    rerender()
    userEvent.click(sortBtn)
    rerender()
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    let latestAlpha = tbodyRows[0].querySelector(
      `td.${getRowKeyClassName(sortBy)}`
    ).innerHTML
    for (const row of Array.from(tbodyRows).slice(1)) {
      const content = row.querySelector(
        `td.${getRowKeyClassName(sortBy)}`
      ).innerHTML
      expect(content <= latestAlpha).toBe(true)
      latestAlpha = content
    }
  })
})

describe('filtering', () => {
  test('renders no filter selects when filter is not passed', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} />)
    const filterSelects = result.container.querySelectorAll(
      'table thead tr:nth-child(2) th select'
    )
    expect(filterSelects.length).toBe(0)
  })

  test('renders all filter selects when filter is true', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} filter />)
    const filterSelects = result.container.querySelectorAll(
      'table thead tr:nth-child(2) th select'
    )
    expect(filterSelects.length).toBe(Array.from(userHeaders.keys()).length)
  })

  test('renders select filter selects when array is passed', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const filterKeys = ['id', 'name', 'email']
    const result = render(<Table headers={userHeaders} filter={filterKeys} />)
    const filterSelects = result.container.querySelectorAll(
      'table thead tr th select'
    )
    expect(filterSelects.length).toBe(filterKeys.length)
    for (const key of filterKeys) {
      expect(
        result.container.querySelectorAll(
          `table thead tr th.${getRowKeyClassName(key)} select`
        ).length
      ).toBe(1)
    }
  })

  test('renders filtered rows when filter selection is made', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} rows={users} filter />)
    const filterSelect = result.container.querySelector(
      `table thead tr:nth-child(2) th.${getRowKeyClassName('id')} select`
    )
    userEvent.selectOptions(filterSelect, '1')
    result.rerender(<Table headers={userHeaders} rows={users} filter />)
    expect(filterSelect.value).toBe('1')
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    expect(tbodyRows.length).toBe(1)
    expect(
      tbodyRows[0].querySelector(`td.${getRowKeyClassName('id')}`).innerHTML
    ).toBe('1')
  })

  test('renders filtered rows correctly after de-selecting a filter', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} rows={users} filter />)
    const rerender = () => {
      result.rerender(<Table headers={userHeaders} rows={users} filter />)
    }
    const filterSelects = result.container.querySelectorAll(
      `table thead tr:nth-child(2) th select`
    )
    userEvent.selectOptions(filterSelects[1], '1')
    rerender()
    expect(filterSelects[1].value).toBe('1')
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    expect(tbodyRows.length).toBe(1)
    expect(
      tbodyRows[0].querySelector(`td.${getRowKeyClassName('id')}`).innerHTML
    ).toBe('1')
    userEvent.selectOptions(filterSelects[2], 'Ervin Howell')
    rerender()
    expect(filterSelects[2].value).toBe('Ervin Howell')
    const resetBtn = result.container.querySelector(
      'table tbody tr .pxn-filter-btn'
    )
    expect(resetBtn).toBeInTheDocument()
    userEvent.selectOptions(filterSelects[2], '')
    rerender()
    expect(filterSelects[2].value).toBe('')
    expect(resetBtn).not.toBeInTheDocument()
  })

  test('renders working "reset filters" button when all rows are filtered out', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} rows={users} filter />)
    const rerender = () => {
      result.rerender(<Table headers={userHeaders} rows={users} filter />)
    }
    const filterSelects = result.container.querySelectorAll(
      `table thead tr:nth-child(2) th select`
    )
    userEvent.selectOptions(filterSelects[1], '1')
    rerender()
    expect(filterSelects[1].value).toBe('1')
    userEvent.selectOptions(filterSelects[2], 'Ervin Howell')
    rerender()
    expect(filterSelects[2].value).toBe('Ervin Howell')
    const resetBtn = result.container.querySelector(
      'table tbody tr .pxn-filter-btn'
    )
    expect(resetBtn).toBeInTheDocument()
    userEvent.click(resetBtn)
    rerender()
    const tbodyRows = result.container.querySelectorAll('table tbody tr')
    expect(tbodyRows.length).toBe(10)
  })
})

describe('searching', () => {
  test('renders no search input when search is not passed', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} />)
    const searchInputs = result.container.querySelectorAll(
      'table tfoot tr th .pxn-table-search input'
    )
    expect(searchInputs.length).toBe(0)
  })

  test('renders search input when search is true', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} search />)
    const searchInputs = result.container.querySelectorAll(
      'table tfoot tr.pxn-table-search th input'
    )
    expect(searchInputs.length).toBe(1)
  })

  test('renders filtered results when search is entered', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} rows={users} search />)
    const searchInput = result.container.querySelector(
      'table tfoot tr.pxn-table-search th input'
    )
    const searchTerm = 'clem'
    for (let c = 0; c < searchTerm.length; c++) {
      userEvent.type(searchInput, searchTerm[c])
      result.rerender(<Table headers={userHeaders} rows={users} search />)
      expect(searchInput.value).toBe(searchTerm.slice(0, c + 1))
    }
    expect(result.container.querySelectorAll('table tbody tr').length).toBe(2)
  })

  test('renders results that are filtered according to the keys that are explicitly passed in the search prop', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(
      <Table headers={userHeaders} rows={users} search={['website']} />
    )
    const searchInput = result.container.querySelector(
      'table tfoot tr.pxn-table-search th input'
    )
    const searchTerm = '.biz'
    for (let c = 0; c < searchTerm.length; c++) {
      userEvent.type(searchInput, searchTerm[c])
      result.rerender(
        <Table headers={userHeaders} rows={users} search={['website']} />
      )
      expect(searchInput.value).toBe(searchTerm.slice(0, c + 1))
    }
    expect(result.container.querySelectorAll('table tbody tr').length).toBe(1)
  })
})

describe('pagination', () => {
  test('renders no .pagination-controls when pagination is not passed', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} />)
    const paginationControls = result.container.querySelectorAll(
      'table tfoot tr th.pagination-controls'
    )
    expect(paginationControls.length).toBe(0)
  })

  test('renders .pagination-controls when pagination is passed', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const result = render(<Table headers={userHeaders} pagination={5} />)
    const paginationControls = result.container.querySelectorAll(
      'table tfoot tr th.pagination-controls'
    )
    expect(paginationControls.length).toBe(1)
  })

  test('renders correct number of pages', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const pagination = 3
    const result = render(
      <Table headers={userHeaders} rows={users} pagination={pagination} />
    )
    const rangeControl = result.container.querySelectorAll(
      'table tfoot tr th.pagination-controls input[type="range"]'
    )
    expect(rangeControl.length).toBe(1)
    expect(rangeControl[0].getAttribute('min')).toBe(String(0))
    expect(rangeControl[0].getAttribute('max')).toBe(
      String(
        Math.floor(users.length / pagination) +
          (users.length % pagination ? 1 : 0) -
          1
      )
    )
    const numberInputs = result.container.querySelectorAll(
      'table tfoot tr th.pagination-controls input[type="number"]'
    )
    expect(numberInputs.length).toBe(2)
    expect(numberInputs[0].getAttribute('min')).toBe(String(1))
    expect(numberInputs[0].getAttribute('max')).toBe(
      String(
        Math.floor(users.length / pagination) +
          (users.length % pagination ? 1 : 0)
      )
    )
    expect(numberInputs[1].value).toBe(
      String(
        Math.floor(users.length / pagination) +
          (users.length % pagination ? 1 : 0)
      )
    )
  })

  test('renders correct pages based on page number, and prev/next buttons work correctly', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const pagination = 3
    const result = render(
      <Table headers={userHeaders} rows={users} pagination={pagination} />
    )
    const rerender = () => {
      result.rerender(
        <Table headers={userHeaders} rows={users} pagination={pagination} />
      )
    }
    const numberInput = result.container.querySelector(
      'table tfoot tr th.pagination-controls input[type="number"]'
    )
    expect(numberInput.value).toBe(String(1))
    const tbody = result.container.querySelector('table tbody')
    const navBtns = result.container.querySelectorAll('.pxn-nav-btn')
    for (let i = 0; i < users.length; i += pagination) {
      const rows = tbody.querySelectorAll('tr')
      expect(rows.length <= pagination).toBe(true)
      for (let r = 0; r < rows.length; r++) {
        expect(
          rows[r].querySelector(`td.${getRowKeyClassName('id')}`).innerHTML
        ).toBe(String(users.slice(i, i + pagination)[r].id))
      }
      userEvent.click(navBtns[1])
      rerender()
    }
    for (let i = users.length - 1; i >= 0; i -= pagination) {
      const rows = tbody.querySelectorAll('tr')
      expect(rows.length <= pagination).toBe(true)
      for (let r = 0; r < rows.length; r++) {
        expect(
          rows[r].querySelector(`td.${getRowKeyClassName('id')}`).innerHTML
        ).toBe(String(users.slice(i, i + pagination)[r].id))
      }
      userEvent.click(navBtns[0])
      rerender()
    }
  })

  test('renders correct pages based on page number entered in number input', () => {
    const userHeaders = new Map()
      .set('view', 'View')
      .set('id', 'ID')
      .set('name', 'Name')
      .set('email', 'Email')
      .set('phone', 'Phone')
      .set('website', 'Website')
    const pagination = 3
    const result = render(
      <Table headers={userHeaders} rows={users} pagination={pagination} />
    )
    const rerender = () => {
      result.rerender(
        <Table headers={userHeaders} rows={users} pagination={pagination} />
      )
    }
    const numberInput = result.container.querySelector(
      'table tfoot tr th.pagination-controls input[type="number"]'
    )
    expect(numberInput.value).toBe(String(1))
    const tbody = result.container.querySelector('table tbody')
    const numberOfPages =
      Math.floor(users.length / pagination) +
      (users.length % pagination ? 1 : 0)
    for (let p = 1; p <= numberOfPages; p++) {
      userEvent.type(numberInput, '{backspace}{backspace}')
      rerender()
      userEvent.type(numberInput, String(p))
      rerender()
      const rows = tbody.querySelectorAll('tr')
      expect(rows.length).toBe(
        p < numberOfPages ? pagination : users.length % pagination
      )
      for (let r = 0; r < rows.length; r++) {
        expect(
          rows[r].querySelector(`td.${getRowKeyClassName('id')}`).innerHTML
        ).toBe(
          String(
            users.slice(
              pagination * (p - 1),
              pagination * (p - 1) + pagination
            )[r].id
          )
        )
      }
    }
  })
})
