import { useScript as useScript } from "@deco/deco/hooks";

export interface Props {}

const setup = ({}: Props) => {
  
  document.documentElement.style.scrollBehavior = 'smooth';
  document.documentElement.style.backgroundColor = '#000000';

  let currentScroll = window.scrollY;
  let targetScroll = currentScroll;
  let isScrolling = false;

  const handleScroll = () => {
    if (!isScrolling) {
      targetScroll = window.scrollY; // Armazena a posição atual durante o scroll natural
      currentScroll = targetScroll;
    }
  };

  const smoothScroll = () => {
    if (isScrolling) {
      currentScroll += (targetScroll - currentScroll) * 0.1; // Controle da suavidade

      // Atualiza a posição do scroll
      window.scrollTo(0, currentScroll);

      // Verifica se chegou no destino
      if (Math.abs(targetScroll - currentScroll) < 0.5) {
        isScrolling = false; // Interrompe a animação
      } else {
        requestAnimationFrame(smoothScroll);
      }
    }
  };

  const backToTop = () => {
    isScrolling = true; // Ativa a animação controlada
    targetScroll = 0; // Define o alvo para o topo
    smoothScroll(); // Inicia a animação
  };

  window.addEventListener("scroll", handleScroll);

  const button = document.getElementById("backOnTop");
  button?.addEventListener("click", backToTop);
};

function BackOnTopButton({}: Props) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, {}),
      }}
    />
  );
}

export default BackOnTopButton;
