import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import SocialIcons from "../components/ui/SocialIcons/index.tsx";

export interface Endereco {
  street?: string;
  complement?: string;
  state?: string;
  zipCode?: string;
  contact?: string;
}

/**
 * @title {{{type}}}
 */
export interface SocialAccount {
  type: "Instagram" | "TikTok" | "YouTube" | "LinkedIn";
  url: string;
}

export interface RedeSocial {
  text?: string;
  socials: SocialAccount[];
}

export interface Props {
  image: ImageWidget;
  backOnTop?: string;
  address: Endereco;
  socialMedia: RedeSocial;
}

export default function Footer({
  image,
  backOnTop = "",
  address,
  socialMedia,
}: Props) {
  return (
    <section className="w-full bg-black">
      <div className="w-full h-full">
        {/* Imagem de Fundo */}
        {image && (
          <Image
            src={image || ""}
            className="w-full"
            title="Galeria"
          />
        )}
      </div>

      <div className="!px-[3.5%] pt-7">
        <div className="pt-[30px] md:pt-[60px] pb-20 md:pb-[30px] flex flex-col md:flex-row justify-between items-center">
          {backOnTop && (
            <div className="text-center inline-flex items-center gap-x-4 w-full">
              <a
                href={backOnTop}
                className="text-sm font-helvetica leading-tight-1.6 text-white"
              >
                Voltar ao Topo
              </a>
              <div className="w-10 border-b border-white"></div>
            </div>
          )}

          <div className="text-center my-5 w-full">

            {address.street && 
              <p className="text-sm font-normal leading-tight-25 text-gray-lighter-footer">
                {address.street}
              </p>}

            {address.complement && 
              <p className="text-sm font-normal leading-tight-25 text-gray-lighter-footer">
                {address.complement} <span>{address.state}</span> <span>{address.zipCode}</span>
              </p>}

            {address.contact && (
              <a href={`tel:${address.contact}`} className="text-sm font-normal leading-tight-25 text-gray-lighter-footer">
                <i>{address.contact}</i>
              </a>

            )}
          </div>

          <SocialIcons socialMedia={socialMedia} />

        </div>
      </div>  
    </section>
  );
}