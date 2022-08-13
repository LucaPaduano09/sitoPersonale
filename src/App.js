import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.tsx';
import Gallery from './components/Gallery/Gallery.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery slides={[{
        title: "Social.me",
        content: "Tutti i tuoi profili social, in un unico posto",
        bgColor: "#0a2472"
      }]} />
    </div>
  );
}

export default App;
