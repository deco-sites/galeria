import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {
    
  const bigText = document.querySelectorAll('.texto-grande')


  bigText.forEach(element => {
    
    const borderElement = element.nextElementSibling;

    element.addEventListener('mouseover', () => {
        borderElement.classList.remove('w-0');
        borderElement.classList.add('w-full');
    });

  
    element.addEventListener('mouseout', () => {
      
        borderElement.classList.add('w-0');
        borderElement.classList.remove('w-full');
    });
});

  
}

function ContentButton(
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
export default ContentButton;