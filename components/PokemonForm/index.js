import React, { useEffect } from 'react';
import { observer, useValue } from 'startupjs';
import { Div, H2, ObjectInput, Button, Alert } from '@startupjs/ui';
import { useSavePokemon } from './hooks';

import './index.styl';

const formProperties = {
  name: {
    input: 'text',
    label: 'Name'
  },
  avatar: {
    input: 'text',
    label: 'Avatar'
  },
  order: {
    input: 'text',
    label: 'Order'
  },
  type: {
    input: 'select',
    label: 'Type',
    options: ['Fire', 'Water', 'Electric', 'Grass']
  },
  skills: {
    input: 'text',
    label: 'Skills'
  },
  other: {
    input: 'text',
    label: 'Other'
  }
};

const requiredFields = ['name', 'type'];

const validationWarning =
  'Please fill up mandatory fields - ' +
  requiredFields.map(f => formProperties[f].label).join(', ');

const PokemonForm = observer(({ pokemon }) => {
  const [value, $value] = useValue();
  const [handleSave, saving] = useSavePokemon(pokemon);
  const [showAlert, $showAlert] = useValue(false);

  useEffect(() => {
    if (pokemon) {
      $value.set(pokemon);
    }
  }, []);

  const onSave = () => {
    if (requiredFields.some(f => !value || !value[f])) {
      $showAlert.set(true);
    } else {
      handleSave(value);
    }
  };

  console.info('validationWarning', validationWarning);

  return pug`
    Div.root
      H2 #{pokemon ? 'Edit' : 'Create'} Pokemon
      if showAlert
        Alert(
          color='error'
          label=validationWarning
          onClose=() => $showAlert.set(false)
        )         
      ObjectInput.form(
        type='text'
        value=value
        $value=$value
        properties=formProperties
      )
      Button.btn(
        color='primary'
        onPress=onSave
      ) Save
  `;
});

export default PokemonForm;
