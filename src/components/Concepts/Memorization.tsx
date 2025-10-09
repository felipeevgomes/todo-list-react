import { useMemo, useState } from "react";

interface MemorizationProps {
  finacialData: {
    inomes: number[];
    outcomes: number[];
  };
}

export const Memorization: React.FC<MemorizationProps> = ({ finacialData }) => {
  //estado que difine se os valores devem ser mostrado ou não
  const [showValues, setShowValues] = useState(true);

  const totalIcomes = useMemo(() => {
    return finacialData.inomes.reduce((total, income) => {
      return (total += income);
    }, 0);
  }, [finacialData.inomes]);

  const totalOutcomes = useMemo(() => {
    return finacialData.outcomes.reduce((total, outcome) => {
      return (total += outcome);
    }, 0);
  }, [finacialData.outcomes]);

  console.log("renderização do componente...");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memorization</h1>
      <h2> useMemo</h2>
      <p>{`total de receita: R$ ${showValues ? totalIcomes : "xxxxx"}`}</p>
      <br />
      <p>{`total de despesas: R$ ${showValues ? totalOutcomes : "xxxxx"}`}</p>

      <br />
      <br />
      <button onClick={() => setShowValues(!showValues)}>
        {showValues ? "ocultar valores" : "Mostrar valores"}
      </button>
    </div>
  );
};
