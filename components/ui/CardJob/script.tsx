import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { post }

const setup = ({ post }: Props) => {

  const cardJob = document.getElementById(post.slug)
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
      cursor.textContent = ''
      cursor.style.height = '36px'
      cursor.style.width = '36px'
    }

  })

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