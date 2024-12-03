import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {

    const cursor = document.getElementById('magicCursor');
    let cursorX = 0, cursorY = 0; // Posição real do cursor
    let delayedX = 0, delayedY = 0; // Posição atrasada da div

    // Captura as coordenadas do mouse em tempo real
    window.addEventListener('mousemove', (event) => {
        cursorX = event.clientX - 18; // Subtrai metade do tamanho da div para centralizar
        cursorY = event.clientY - 18;
    });

    // Função para interpolar movimento
    function moveCursor() {
        // Ajusta gradualmente a posição atrasada
        delayedX += (cursorX - delayedX) * 0.1; // Quanto menor o fator (0.1), maior o atraso
        delayedY += (cursorY - delayedY) * 0.1;

        // Atualiza a posição da div
        cursor.style.transform = `translate(${delayedX}px, ${delayedY}px)`;

        // Chama a função novamente na próxima animação
        requestAnimationFrame(moveCursor);
    }

    // Inicia o loop de animação
    moveCursor();

    const nextPage = document.getElementById('nextPage');

    nextPage?.addEventListener('mouseenter', (event) => {
      cursor?.classList.add('hidden')
    })

    nextPage?.addEventListener('mouseleave', (event) => {
      cursor?.classList.remove('hidden')
    })

    const logoHeader = document.getElementById('logoHeader');

    logoHeader?.addEventListener('mouseenter', (event) => {
      cursor?.classList.add('hidden')
    })

    logoHeader?.addEventListener('mouseleave', (event) => {
      cursor?.classList.remove('hidden')
    })

    
}

function MagicCursor(
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
export default MagicCursor;