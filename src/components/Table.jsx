import PropTypes from 'prop-types'
import React from 'react'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { joinClassNames } from '../lib/joinClassNames.js'
import '../style/table.scss'

const themeClassNames = {
  primary: 'table-primary',
  secondary: 'table-secondary',
  success: 'table-success',
  danger: 'table-danger',
  warning: 'table-warning',
  info: 'table-info',
  light: 'table-light',
  dark: 'table-dark'
}

const getRowKeyClassName = key =>
  `row-key-${key.toLowerCase().replace(/[^a-z0-9]/g, '-')}`

/**
 * > _A sortable, filterable, searchable, pageable, and extendable table_
 * > https://getbootstrap.com/docs/5.1/content/tables/
 */
function Table(props) {
  const [filters, setFilters] = React.useState({})
  const [sortKey, setSortKey] = React.useState(props.defaultSortKey)
  const [revSort, setRevSort] = React.useState(props.defaultRevSort || false)
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(0)
  const searchInputId = React.useId()

  const headerKeys = React.useMemo(
    () => Array.from(props.headers.keys()),
    [props.headers]
  )

  const filteredRows = React.useMemo(
    () =>
      Array.from(props.rows)
        .sort((a, b) => {
          let retval = 0
          if (sortKey) {
            if (a[sortKey] < b[sortKey]) {
              retval = revSort ? 1 : -1
            } else if (a[sortKey] > b[sortKey]) {
              retval = revSort ? -1 : 1
            }
          }
          return retval
        })
        .filter(row => {
          let retval = true
          for (const key of Object.keys(filters)) {
            if (!filters[key]) {
              continue
            }
            if (String(row[key]) !== String(filters[key])) {
              retval = false
              break
            }
          }
          const searchKeys = search ? search.split(/\s/g) : []
          for (const searchKey of searchKeys) {
            let inRow = false
            for (const key of headerKeys) {
              if (
                props.search !== true &&
                !(props.search || []).includes(key)
              ) {
                continue
              } else if (
                row[key] !== undefined &&
                String(row[key]).toLowerCase().includes(searchKey.toLowerCase())
              ) {
                inRow = true
                break
              }
            }
            if (!inRow) {
              retval = false
            }
          }
          return retval
        }),
    [filters, sortKey, revSort, search, props.rows, props.search, headerKeys]
  )

  const paginatedRows = React.useMemo(
    () =>
      filteredRows.slice(
        props.pagination >= 1 ? page * props.pagination : 0,
        props.pagination >= 1
          ? page * props.pagination + props.pagination
          : undefined
      ),
    [filteredRows, props.pagination, page]
  )

  const extendRow = React.useMemo(
    () => (props.extendRow ? props.extendRow : row => row),
    [props.extendRow]
  )
  const extendedRows = React.useMemo(
    () => paginatedRows.map(row => Object.assign({}, row, extendRow(row))),
    [paginatedRows, extendRow]
  )

  const filterOptions = React.useMemo(() => {
    const retval = {}
    for (const row of props.rows) {
      for (const key of headerKeys) {
        if (!retval[key]) {
          retval[key] = []
        }
        if (!retval[key].includes(row[key]) && row[key] !== undefined) {
          retval[key].push(row[key])
        }
      }
    }
    for (const key of Object.keys(retval)) {
      retval[key].sort((a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
          return a - b
        }
        let x = 0
        if (a < b) {
          x--
        } else if (a > b) {
          x++
        }
        return x
      })
    }
    return retval
  }, [props.rows, headerKeys])

  const filterFields = React.useMemo(() => {
    const retval = {}
    for (const key of headerKeys) {
      retval[key] = (
        <select
          className='form-control'
          onChange={e => {
            const f = Object.assign({}, filters)
            f[key] = e.target.value
            if (!f[key]) {
              delete f[key]
            }
            setPage(0)
            setFilters(f)
          }}
          value={filters[key] || ''}>
          <option value=''>*</option>
          {filterOptions[key]?.map((option, o) => (
            <option key={o} value={option}>
              {option}
            </option>
          ))}
        </select>
      )
    }
    return retval
  }, [headerKeys, filterOptions, filters])

  const paginationLength = React.useMemo(
    () =>
      Math.floor(filteredRows.length / props.pagination) +
      (filteredRows.length % props.pagination ? 1 : 0),
    [filteredRows, props.pagination]
  )

  const sort = React.useCallback(
    key => {
      if (sortKey === key) {
        setRevSort(!revSort)
      } else {
        setSortKey(key)
        setRevSort(false)
      }
      setPage(0)
    },
    [sortKey, revSort]
  )

  const classNames = {
    container: joinClassNames(
      'pxn-table-container',
      props.responsive ? 'table-responsive' : ''
    ),
    table: joinClassNames(
      'table',
      themeClassNames[props.theme] || '',
      props.hover ? 'table-hover' : '',
      props.striped ? 'table-striped' : '',
      props.compact ? 'table-sm' : ''
    )
  }
  return (
    <div className={classNames.container}>
      <table className={classNames.table}>
        <thead>
          <tr>
            {Array.from(props.headers).map(([key, label]) => (
              <th key={key} className={getRowKeyClassName(key)}>
                {label}
                {props.sort === true || (props.sort || []).includes(key) ? (
                  <button
                    type='button'
                    className='btn btn-sm btn-outline-secondary pxn-sort-btn'
                    onClick={() => sort(key)}>
                    {sortKey === key ? (
                      revSort ? (
                        <FaSortUp />
                      ) : (
                        <FaSortDown />
                      )
                    ) : (
                      <FaSort />
                    )}
                  </button>
                ) : (
                  ''
                )}
              </th>
            ))}
          </tr>
          {props.filter ? (
            <tr>
              {headerKeys.map(key => (
                <th key={key} className={getRowKeyClassName(key)}>
                  {props.filter === true ||
                  (props.filter || []).includes(key) ? (
                    <div className='input-group input-group-sm'>
                      {filterFields[key]}
                    </div>
                  ) : (
                    ''
                  )}
                </th>
              ))}
            </tr>
          ) : null}
        </thead>
        <tbody>
          {extendedRows.map((row, i) => (
            <tr key={props.rowKey ? row[props.rowKey] : i}>
              {headerKeys.map(key => (
                <td key={key} className={getRowKeyClassName(key)}>
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
          {filteredRows.length === 0 ? (
            <tr>
              <td colSpan={headerKeys.length}>
                {props.rows.length === 0 ? (
                  <div>There are now rows to display.</div>
                ) : null}
                {props.rows.length >= 1 ? (
                  <div>
                    No rows match your filters.{' '}
                    <button
                      type='button'
                      className='ms-1 btn btn-sm btn-outline-secondary pxn-filter-btn'
                      onClick={() => {
                        setPage(0)
                        setFilters({})
                        setSearch('')
                      }}>
                      Reset
                    </button>
                  </div>
                ) : null}
              </td>
            </tr>
          ) : null}
        </tbody>
        {props.search || props.pagination ? (
          <tfoot>
            {props.search ? (
              <tr className='pxn-table-search'>
                <th colSpan={headerKeys.length}>
                  <div className='input-group input-group-sm'>
                    <label className='input-group-text' htmlFor={searchInputId}>
                      Search
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id={searchInputId}
                      value={search}
                      onChange={e => {
                        setPage(0)
                        setSearch(e.target.value)
                      }}
                    />
                  </div>
                </th>
              </tr>
            ) : null}
            {props.pagination >= 1 ? (
              <tr>
                <th colSpan={headerKeys.length} className='pagination-controls'>
                  <nav>
                    <div className='row'>
                      <div className='col'>
                        <div className='input-group input-group-sm'>
                          <button
                            className='btn btn-sm btn-outline-secondary pxn-nav-btn'
                            aria-label='Previous'
                            onClick={() => {
                              if (page > 0) {
                                setPage(page - 1)
                              }
                            }}>
                            <span aria-hidden='true'>
                              <MdNavigateBefore />
                            </span>
                          </button>
                          <input
                            type='range'
                            className='form-range ms-2 me-2'
                            min='0'
                            max={paginationLength - 1}
                            value={page}
                            onChange={e => {
                              setPage(Number(e.target.value))
                            }}
                          />
                          <button
                            className='btn btn-sm btn-outline-secondary pxn-nav-btn'
                            aria-label='Next'
                            onClick={() => {
                              if (page < paginationLength - 1) {
                                setPage(page + 1)
                              }
                            }}>
                            <span aria-hidden='true'>
                              <MdNavigateNext />
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className='col'>
                        <div className='input-group input-group-sm col'>
                          <span className='input-group-text'>Page</span>
                          <input
                            type='number'
                            className='form-control'
                            min='1'
                            max={paginationLength}
                            value={page + 1}
                            onChange={e => {
                              setPage(Number(e.target.value) - 1)
                            }}
                          />
                          <span className='input-group-text'>of</span>
                          <input
                            type='number'
                            className='form-control'
                            value={paginationLength}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </nav>
                </th>
              </tr>
            ) : null}
          </tfoot>
        ) : null}
      </table>
    </div>
  )
}

Table.propTypes = {
  /** cuts cell padding in half */
  compact: PropTypes.bool,
  /** reverse sort by default */
  defaultRevSort: PropTypes.bool,
  /** sets the default key to sort rows. Rows will otherwise be ordered as they
   * were received */
  defaultSortKey: PropTypes.string,
  /** accepts a row argument and returns additional attributes */
  extendRow: PropTypes.func,
  /** list of attributes which can be filtered, or `true` for all attributes */
  filter: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** highlight hovered rows */
  hover: PropTypes.bool,
  /** Map of header columns (key => label) */
  headers: PropTypes.instanceOf(Map),
  /** enable pagination and set number of rows per page */
  pagination: PropTypes.number,
  /** setting to true will include the `.table-responsive` class to the outer `<div>` */
  responsive: PropTypes.bool,
  /** unique key attribute. 'id' is a good value to use if your data has it */
  rowKey: PropTypes.string,
  /** rows to display in the tbody */
  rows: PropTypes.arrayOf(PropTypes.object),
  /** list of attributes which can be searched, or `true` for all attributes */
  search: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** list of attributes which can be sorted, or `true` for all attributes */
  sort: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** row zebra-striping */
  striped: PropTypes.bool,
  /** apply a predefined `.table-${theme} className` */
  theme: PropTypes.oneOf([
    'primary',
    'success',
    'danger',
    'warning',
    'dark',
    'secondary',
    'light',
    'info',
    'default'
  ])
}

Table.defaultProps = {
  headers: new Map(),
  responsive: false,
  rows: [],
  theme: 'default'
}

export { Table, getRowKeyClassName }
