import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {
    
    const btnMenu = document.getElementById('btnMenu')
    const btnMenuCaption = document.getElementById('btnMenuCaption')
    const MenuContent = document.getElementById('MenuContent')
    const itemsMenu = document.getElementsByClassName('itemMenu')

    // Captura as coordenadas do mouse em tempo real
    btnMenu?.addEventListener('mouseleave', (event) => {
        
        if(btnMenuCaption) {
            btnMenuCaption.textContent = 'Abrir'
        }

    });

    // Captura as coordenadas do mouse em tempo real
    btnMenu?.addEventListener('click', (event) => {
        
        if(MenuContent && btnMenuCaption) {
            btnMenuCaption.textContent = 'Fechar'
            MenuContent.classList.remove('hidden')
        }

    });

    // Captura as coordenadas do mouse em tempo real
    btnMenu?.addEventListener('mouseout', (event) => {
        
        if(btnMenuCaption) {
            btnMenuCaption.textContent = 'Menu'
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