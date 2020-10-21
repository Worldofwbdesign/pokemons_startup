import React from 'react'
import { observer, usePage, useQuery } from 'startupjs'
import { Pagination, Select, Div } from '@startupjs/ui'

import './index.styl'

const pageSizeList = [10, 20, 40]

const PokemonsPagination = observer(() => {
  const [page = 0, $page] = usePage('page')
  const [pageSize = 10, $pageSize] = usePage('pageSize')
  const [search] = usePage('search')
  const [selectedItems = []] = usePage('selectedItems')
  const $match = {
    _type: { $exists: true }

  }
  if (search) {
    $match.name = { $regex: search, $options: 'i' }
  }
  if (selectedItems.length) {
    $match.type = { $in: selectedItems }
  }
  const [[{ count = 0 } = {}]] = useQuery('pokemons', {
    $aggregate: [{ $match }, { $count: 'count' }]
  })

  return pug`
    Div.root
      Pagination(
        variant='compact'
        page=page
        pages=Math.ceil(count / pageSize)
        onChangePage=newPage => $page.set(newPage)
      )
      Select.select(
        value=pageSize
        onChange=newPageSize => $pageSize.set(newPageSize)
        options=pageSizeList
        showEmptyValue=false
      )
  `
})

export default PokemonsPagination
