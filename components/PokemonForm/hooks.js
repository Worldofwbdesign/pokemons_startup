import { model, useValue, emit } from 'startupjs';

export const useSavePokemon = pokemon => {
  const [saving = false, $saving] = useValue();

  const handleSave = async values => {
    try {
      $saving.set(true);
      if (pokemon) {
        await model.set(`pokemons.${pokemon.id}`, values);
      } else {
        await model.add('pokemons', values);
      }

      emit('url', '/');
    } finally {
      $saving.set(false);
    }
  };

  return [handleSave, saving];
};
