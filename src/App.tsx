import { Header } from "./components/Headear/Header";
import { Taskes } from "./components/Tasks/Taskes";

import "./App.css";
import { Memorization } from "./components/Concepts/Memorization";

function App() {
  //const [toogle, setToogle] = useState(false);
  /*
  useEffect(() => {
    console.log("Executando a função do UseEffect...");

    //componentWillUnmount => Cleanup Function
    return () => {
      console.log(
        "Isso aqui vai ser executado quando o componente App for desmontado da tela"
      );
    };
  }, [toogle]);
*/
  //O useEffect será disparado sempre que alguma variável do array de dependencia for alterado
  //Por padrao, sempre o useEffect sera disparado apos a montagem do componente(componentDiMount)

  return (
    <>
      <Header />
      <Taskes />
      <Memorization
        finacialData={{ inomes: [50, 30, 20], outcomes: [5, 8, 4] }}
      />
    </>
  );
}

export default App;
