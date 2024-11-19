import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { post }

const setup = ({ post }: Props) => {

  const cardJob = document.getElementById(post.slug)
  const cardJobImage = document.getElementById('img-' + post.slug)
  const cursor = document.getElementById('magicCursor');

  cardJob?.addEventListener('mouseenter', (event) => {

    if(cursor) {
      cursor.classList.add('bg-white')
      cursor.classList.add('text-center')
      cursor.classList.add('flex')
      cursor.classList.add('items-center')
      cursor.classList.add('justify-center')
      cursor.classList.add('p-4')
      cursor.classList.add('leading-none')
      cursor.classList.add('duration-150')
      cursor.textContent = 'Ver Mais'
      cursor.style.height = '80px'
      cursor.style.width = '80px'
    }

  })

  cardJob?.addEventListener('mouseleave', (event) => {

    if(cursor) {
      cursor.classList.remove('bg-white')
      cursor.classList.remove('text-center')
      cursor.classList.remove('flex')
      cursor.classList.remove('items-center')
      cursor.classList.remove('justify-center')
      cursor.classList.remove('p-4')
      cursor.classList.remove('leading-none')
      cursor.classList.remove('duration-150')
      cursor.textContent = ''
      cursor.style.height = '36px'
      cursor.style.width = '36px'
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