import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {
    
    const btnMenu = document.getElementById('btnMenu')
    const btnMenuCaption = document.getElementById('btnMenuCaption')
    const MenuContent = document.getElementById('MenuContent')
    const itemsMenu = document.getElementsByClassName('itemMenu')

    // Captura as coordenadas do mouse em tempo real
    btnMenu?.addEventListener('click', (event) => {
        
        if(MenuContent && btnMenuCaption && btnMenuCaption.textContent === 'Abrir') {
            btnMenuCaption.textContent = 'Fechar'
            MenuContent.classList.remove('hidden')
            setTimeout(() => MenuContent.classList.add('opacity-100'), 10);
        }
        
        else if(MenuContent && btnMenuCaption && btnMenuCaption.textContent === 'Fechar') {
            btnMenuCaption.textContent = 'Abrir'
            MenuContent.classList.remove('opacity-100')
            setTimeout(() => MenuContent.classList.add('hidden'), 300);
        }

    });

}

function Menu(
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
export default Menu;