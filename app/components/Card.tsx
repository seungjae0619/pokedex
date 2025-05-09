export default function Card({ name, index }: { name: string; index: string }) {
  return (
    <div className="w-[130px] text-center justify-items-center rounded-2xl border-1 border-gray-400 shadow mt-2 p-3">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        className="object-center"
      />
      {name}
    </div>
  );
}
