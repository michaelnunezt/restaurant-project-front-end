const CocktailList = ({ cocktailList}) => {

  const cocktails = cocktailList.map(cocktail => {
    return <li key={cocktail._id}>{cocktail.name}</li>
  })
  return <h1>Cocktail List</h1>
}

export default CocktailList