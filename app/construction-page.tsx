import { ConfettiCelebration } from "./confetti-celebration";

type ConstructionPageProps = {
  commitCount: number | null;
};

export function ConstructionPage({ commitCount }: ConstructionPageProps) {
  return (
    <main className="construction">
      <ConfettiCelebration />
      <section className="construction-card" aria-labelledby="construction-title">
        <p className="eyebrow">Compila News</p>
        <h1 id="construction-title">Em construção</h1>
        <p className="description">
          Estamos neste exato momento criando o Compila News, um lugar na internet
          para quem trabalha com tecnologia e precisa consumir conteúdos com valor
          concreto.
        </p>
        <p className="commits" aria-live="polite">
          Total de commits do projeto:{" "}
          <strong>{commitCount ?? "indisponível"}</strong>
        </p>
        <a
          className="repo-button"
          href="https://github.com/Flavianna-Saldanha/compila-news"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositório
        </a>
      </section>
    </main>
  );
}
