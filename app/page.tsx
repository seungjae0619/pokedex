import Header from "./components/Header";
import Card from "./components/Card";
import { getPokemonList } from "./lib/pokeapi";

export default async function Home() {
  const data = await getPokemonList();
  console.log(data.results);

  if (!data.results) return <div>Loading...</div>;

  return (
    <div className=" items-center">
      <header className="h-auto">
        <Header />
      </header>

      <main>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-7 px-25 py-10">
          {data.results.map((pokemon: any) => {
            const pokemonIndex =
              pokemon.url.split("/")[pokemon.url.split("/").length - 2];
            return (
              <Card key={pokemon} name={pokemon.name} index={pokemonIndex} />
            );
          })}
        </div>
      </main>
    </div>
  );
}
