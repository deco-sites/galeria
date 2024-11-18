import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Endereco {
  street?: string;
  complement?: string;
  state?: string;
  zipCode?: string;
  contact?: string;
}

export interface RedeSocial {
  text?: string;
  iconShare?: ImageWidget[];
  icon?: ImageWidget[];
}

export interface Props {
  image: ImageWidget;
  backOnTop?: string;
  address: Endereco;
  socialMedia: RedeSocial[];
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
        <div className="pt-[30px] md:pt-[60px] pb-20 md:pb-[30px] flex flex-col md:flex-row justify-between">
          {backOnTop && (
            <div className="text-center inline-flex justify-center items-center gap-x-4">
              <a
                href={backOnTop}
                className="text-sm font-helvetica leading-tight-1.6 text-white"
              >
                Voltar ao Topo
              </a>
              <div className="w-10 border-b border-white"></div>
            </div>
          )}

          <div className="hidden md:block text-center my-5">

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
                {address.contact}
              </a>

            )}
          </div>

          <div className="flex flex-col justify-center space-x-5 mt-5">
            {socialMedia.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center cursor-pointer">
                <div className="flex justify-center items-center gap-x-[13px]">
                  {item.text && <p className="hidden md:block text-sm font-helvetica text-white">{item.text}</p>}
                  {item.iconShare && item.iconShare.length > 0 && (
                    <Image
                      src={item.iconShare[0] || ""}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                      title="Ícone de Compartilhamento"
                    />
                  )}
                </div>
                <div className="block md:hidden gap-x-[15px]">
                  {/* Ícone da Rede Social */}
                  {item.icon && item.icon.length > 0 && (
                    <Image
                      src={item.icon[0] || ""}
                      width={40}
                      height={40}
                      className="w-10 h-10 mt-2"
                      title="Ícone da Rede Social"
                    />
                  )}
                </div>
              </div>
            ))}

            <div className="pr-[15px] block md:hidden text-center my-5">

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
                  {address.contact}
                </a>

              )}
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
}