import { useScript as useScript } from "@deco/deco/hooks";

export interface Props {
    text: string
    hoverText: string
}

const setup = ({ text, hoverText }: Props) => {

    const nextPage = document.getElementById('nextPage');
    const nextPageImage = document.getElementById('nextPageImage');
    const nextPageCaption = document.getElementById('nextPageCaption');

    nextPage?.addEventListener('mouseenter', function(e) {
      
      nextPageImage?.classList.remove('hidden')

      if(nextPageCaption){
        nextPageCaption.textContent = hoverText
        nextPageCaption.classList.add('text-white')
        nextPageCaption.classList.add('animate-marquee')
      }

    })

    nextPage?.addEventListener('mouseleave', function(e) {

      nextPageImage?.classList.add('hidden')

      if(nextPageCaption){
        nextPageCaption.textContent = text
        nextPageCaption.classList.remove('text-white')
        nextPageCaption.classList.remove('animate-marquee')
      }

    })

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