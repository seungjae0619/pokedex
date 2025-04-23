export interface PokemonListItem {
  name: string;
  url: string;
}

export async function getPokemonList(limit = 50, offset = 0) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!res.ok) throw Error("Error");
  console.log(res);
  return res.json();
}
