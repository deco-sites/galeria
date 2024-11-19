import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import MagicCursor from "../components/ui/MagicCursor/index.tsx";
import Menu from "../components/ui/Menu/index.tsx";

/**
 * @title {{{text}}}
 */
export interface Item {
  text: string;
  url: string;
}

export interface Props {
  logo: ImageWidget;
  menu: Item[];
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
          <a href="/" className="flex items-center z-10">
            <Image
              src={logo}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              title="Logo"
            />
          </a>
        )}
        <Menu items={menu} />
      </div>
      <MagicCursor />
    </nav>
  );
}