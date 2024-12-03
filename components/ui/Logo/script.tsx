import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = () => {
  const logoContainer = document.getElementById("logoContainer");
  const logoHeader = document.getElementById("logoHeader");

  if (logoContainer && logoHeader) {
    // Configurações do efeito magnético
    let mouseX = 0,
      mouseY = 0; // Posições do mouse
    let elementX = 0,
      elementY = 0; // Posições do elemento
    const magneticStrength = 50; // Intensidade do efeito magnético
    const easing = 0.1; // Suavidade do movimento
    const maxDistance = 100; // Distância máxima para desligar o efeito

    // Atualiza as posições do mouse ao mover dentro do container
    logoContainer.addEventListener("mousemove", (event) => {
      const rect = logoContainer.getBoundingClientRect();

      // Coordenadas do mouse relativas ao container
      mouseX = event.clientX - (rect.left + rect.width / 2);
      mouseY = event.clientY - (rect.top + rect.height / 2);
    });

    // Para quando o mouse sai do container
    logoContainer.addEventListener("mouseleave", () => {
      mouseX = 0;
      mouseY = 0;
    });

    // Função de animação
    function animate() {
      const dx = (mouseX / logoContainer.offsetWidth) * magneticStrength;
      const dy = (mouseY / logoContainer.offsetHeight) * magneticStrength;

      // Calcula a distância atual do elemento em relação à posição inicial
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Aplica o easing para suavizar o movimento
      if (distance < maxDistance) {
        elementX += (dx - elementX) * easing;
        elementY += (dy - elementY) * easing;
      } else {
        // Retorna suavemente à posição inicial se ultrapassar o limite
        elementX += (0 - elementX) * easing;
        elementY += (0 - elementY) * easing;
      }

      // Atualiza a transformação do elemento
      logoHeader.style.transform = `translate(${elementX}px, ${elementY}px)`;

      // Continua a animação
      requestAnimationFrame(animate);
    }

    // Inicia a animação
    animate();
  }
};

function Logo(
  { }: Props,
) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, { }),
      }}
    />
  );
}
export default Logo;