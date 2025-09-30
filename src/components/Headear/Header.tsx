import { StatCard } from "../StatsCard/StatsCard";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>

          <span>Bem-vindo, Felipe</span>
        </div>

        <div>
          <StatCard title="Total de Tarefas" value={5} />
          <StatCard title="Tarefas Pendentes" value={4} />
          <StatCard title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  );
};
