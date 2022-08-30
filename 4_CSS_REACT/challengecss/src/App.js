import logo from "./logo.svg";
import "./App.css";
import Car from "./components/Car";

function App() {
  const Carros = [
    { nome: "Jetta", km: 100000, cor: "Branca" },
    { nome: "Lancer", km: 27000, cor: "Cinza" },
    { nome: "408 thp", km: 57000, cor: "Preto" },
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {Carros.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
