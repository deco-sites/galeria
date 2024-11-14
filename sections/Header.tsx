import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Menu {
  textMenu: string;
  textMenuOpen: string;
  iconHamburguer: ImageWidget;
  iconOut?: ImageWidget;
  openMenuText: Array<{
    text: string;
    url: string;
  }>;
}

export interface Props {
  logo: ImageWidget;
  menu: Menu[];
}

export default function Header({ 
  logo, 
  menu 

}: Props) {

  return (
    <nav className="w-full bg-transparent fixed top-0 left-0 z-50">
      <div className="px-[3.5%] py-10 flex items-center justify-between w-full bg-transparent">
        {/* Logo */}
        {logo && (
          <a href="/" className="flex items-center">
            <Image
              src={logo}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              title="Logo"
            />
          </a>
        )}

        {/* Ícone de Menu (Hamburguer) */}
        {menu.map((item, index) => (
          <button key={index} id={`menu-button-${index}`} className="relative block">
            <Image
              src={item.iconHamburguer}
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain"
            />
          </button>
        ))}
      </div>

      {/* Menu Aberto */}
      {menu.map((item, index) => (
        <div
          key={index}
          id={`mobile-menu-${index}`}
          className="fixed inset-0 flex flex-col items-center justify-center hidden"
        >
          {/* Ícone de Sair */}
          <button id={`close-menu-${index}`} className="hidden absolute">
            <Image
              src={item.iconOut ?? ""}
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain"
            />
          </button>

          {/* Itens do Menu */}
          <ul className="space-y-5 text-white text-xl">
            {item.openMenuText.map((subItem, subIndex) => (
              <li key={subIndex}>
                <a href={subItem.url || "#"} className="hover:underline">
                  {subItem.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}