import React, { useEffect } from 'react'
import { Input } from '@startupjs/ui'
import { observer, useValue, usePage } from 'startupjs'
import _ from 'lodash'

const Search = observer(() => {
  const [inputValue, $inputValue] = useValue()
  const [, $search] = usePage('search')

  const setSearch = _.throttle(newSearch => $search.set(newSearch), 500)

  useEffect(() => {
    if (inputValue && inputValue.length > 2) {
      setSearch(inputValue)
    } else {
      setSearch('')
    }
    
  }, [inputValue])

  return pug`
    Input.root(
      type='text'
      placeholder='Search pokemon name'
      $value=$inputValue
    )
  `
})

export default Search