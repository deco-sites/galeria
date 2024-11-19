import { useScript as useScript } from "@deco/deco/hooks";

export interface Props {
    text: string
    hoverText: string
}

const setup = ({ text, hoverText }: Props) => {

    const nextPage = document.getElementById('nextPage');
    const nextPageCursor = document.getElementById('nextPageCursor');

    nextPage?.addEventListener('mouseenter', (event) => {
        nextPageCursor?.classList.remove('hidden')
    })
    
    nextPage?.addEventListener('mouseleave', (event) => {
        nextPageCursor?.classList.add('hidden')
    })

    let cursorX = 0, cursorY = 0; // Posição real do cursor
    let delayedX = 0, delayedY = 0; // Posição atrasada da div

    // Captura as coordenadas do mouse em tempo real
    window.addEventListener('mousemove', (event) => {
        cursorX = event.clientX - 120; // Subtrai metade do tamanho da div para centralizar
        cursorY = event.clientY - 120;
    });

    // Função para interpolar movimento
    function moveCursor() {
        // Ajusta gradualmente a posição atrasada
        delayedX += (cursorX - delayedX) * 0.1; // Quanto menor o fator (0.1), maior o atraso
        delayedY += (cursorY - delayedY) * 0.1;

        // Atualiza a posição da div
        nextPageCursor.style.transform = `translate(${delayedX}px, ${delayedY}px)`;

        // Chama a função novamente na próxima animação
        requestAnimationFrame(moveCursor);
    }

    // Inicia o loop de animação
    moveCursor();

}

function NextPage(
  { text, hoverText }: Props,
) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, { text, hoverText }),
      }}
    />
  );
}
export default NextPage;