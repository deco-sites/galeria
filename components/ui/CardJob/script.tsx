import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { post }

const setup = ({ post }: Props) => {

  const cardJob = document.getElementById(post.slug)
  const cardJobImage = document.getElementById('img-' + post.slug)
  const cursor = document.getElementById('magicCursor');

  cardJob?.addEventListener('mouseenter', (event) => {

    let cursorX = 0, cursorY = 0; // Posição real do cursor
    let delayedX = 0, delayedY = 0; // Posição atrasada da div

    // Captura as coordenadas do mouse em tempo real
    window.addEventListener('mousemove', (event) => {
        cursorX = event.clientX - 45; // Subtrai metade do tamanho da div para centralizar
        cursorY = event.clientY - 45;
    });

    // Função para interpolar movimento
    function moveCursor() {
        // Ajusta gradualmente a posição atrasada
        delayedX += (cursorX - delayedX) * 0.5; // Quanto menor o fator (0.1), maior o atraso
        delayedY += (cursorY - delayedY) * 0.5;

        // Atualiza a posição da div
        cursor.style.transform = `translate(${delayedX}px, ${delayedY}px)`;

        // Chama a função novamente na próxima animação
        requestAnimationFrame(moveCursor);
    }

    // Inicia o loop de animação
    moveCursor();

    if(cursor) {
      cursor.classList.remove('opacity-90')
      cursor.classList.add('opacity-100')
      cursor.classList.add('bg-white')
      cursor.classList.add('text-center')
      cursor.classList.add('flex')
      cursor.classList.add('items-center')
      cursor.classList.add('justify-center')
      cursor.classList.add('p-8')
      cursor.classList.add('leading-none')
      cursor.classList.add('duration-150')
      cursor.textContent = 'Ver Mais'
      cursor.style.height = '90px'
      cursor.style.width = '90px'
      cursor.style.borderColor = '#FFFFFF'
    }

  })

  cardJob?.addEventListener('mouseleave', (event) => {

    let cursorX = 0, cursorY = 0; // Posição real do cursor
    let delayedX = 0, delayedY = 0; // Posição atrasada da div

    // Captura as coordenadas do mouse em tempo real
    window.addEventListener('mousemove', (event) => {
        cursorX = event.clientX - 16; // Subtrai metade do tamanho da div para centralizar
        cursorY = event.clientY - 16;
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

    if(cursor) {
      cursor.classList.add('opacity-90')
      cursor.classList.remove('opacity-100')
      cursor.classList.remove('bg-white')
      cursor.classList.remove('text-center')
      cursor.classList.remove('flex')
      cursor.classList.remove('items-center')
      cursor.classList.remove('justify-center')
      cursor.classList.remove('p-8')
      cursor.classList.remove('leading-none')
      cursor.classList.remove('duration-150')
      cursor.textContent = ''
      cursor.style.height = '32px'
      cursor.style.width = '32px'
      cursor.style.borderColor = '#F0F0F0'
    }

  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Adiciona as classes para o efeito de zoom-in
        entry.target.classList.add('opacity-100', 'scale-100');
        entry.target.classList.remove('opacity-0', 'scale-110');

        // Para de observar o card depois de revelar
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // Quando 20% do card estiver visível, o efeito será ativado
  });

  if(cardJobImage) {
    observer.observe(cardJobImage)
  }

}

function CardJob(
  { post }: Props,
) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, { post }),
      }}
    />
  );
}
export default CardJob;