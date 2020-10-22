import React from 'react'
import { emit, model } from 'startupjs'
import { Avatar, H4, Div, Span, Card, Tag, Button } from '@startupjs/ui'

import './index.styl'

const colorsMap = {
  Water: 'primary',
  Fire: 'warning',
  Electric: 'error',
  Grass: 'success'
}

const PokemonCard = ({
  fullInfo,
  pokemon: { id, name, avatar, order, type, skills, other }
}) => {
  const handleDelete = async () => {
    await model.del('pokemons.' + id)
    emit('url', '/')
  }

  return pug`
    Card.root(
      styleName=[!fullInfo && 'gridElem']
    )
      H4.name= name

      Avatar.avatar(
        src=avatar
      )= name

      Div.stats
        Span.order # #{order}
        Tag.tag(
          shape='rounded'
          color=colorsMap[type]
        )= type

      if fullInfo
        Div(full).fullStats
          Span.skills
            Span(bold) Skills: 
            Span= skills
          Span.other
            Span(bold) Other info: 
            Span= other
          
          Div.btns
            Button.btn(
              onPress=() => emit('url', '/pokemon/form/' + id)
            ) Edit
            Button.btn(
              color='error'
              onPress=handleDelete
            ) Delete
        
      else
        Div.btns.btns--center
          Button.btn(
            onPress=() => emit('url', '/pokemon/' + id)
          ) View details
  `
}

export default PokemonCard
