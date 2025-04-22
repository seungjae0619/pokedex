import Image from "next/image";
export default function Header() {
  return (
    <div className="flex justify-center p-4 mt-5">
      <Image
        className="mt-[-5]"
        src="/pokeball.webp"
        alt="pokéball"
        width={50}
        height={50}
      />
      <h2 className=" text-4xl text-transparent bg-clip-text text-2xl font-bold bg-gradient-to-r from-orange-300 to-red-600  ">
        Pokédex
      </h2>
    </div>
  );
}
