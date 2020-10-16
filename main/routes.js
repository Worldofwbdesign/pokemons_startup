export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PHome
  },
  {
    path: '/pokemon/:pokemonId',
    exact: true,
    component: components.PPokemonInfo
  },
  {
    path: '/pokemon/form/:pokemonId',
    exact: true,
    component: components.PPokemonForm
  }
]
