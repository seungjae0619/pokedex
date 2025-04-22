import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <header className="h-auto">
        <div className="bg-red-500 h-5"></div>
        <Header />
      </header>

      <main className="p-20 ">
        <div className="grid grid-cols-9 gap-1">
          <Card />
        </div>
      </main>
    </div>
  );
}
