import { Section } from "deco/blocks/section.ts";

/**
 * @title {{{title}}}
 */
export interface Item {
  title: string;
  /**
   * @title Conteúdo
   */
  section: Section;
}

export interface Props {
  /**
   * @title Conteúdo
   */
  sections?: Item[];
}

// Implemente a seção
function LoadComponent(
  { Component, props }: Section,
) {
  return (
    <div>
      <Component {...props} />
    </div>
  );
}

export default function MultiSection(
  { sections }: Props,
) {
  return (
    <div className="py-10 bg-black">
      {sections?.map((item) => (
        LoadComponent(item.section)
      ))}
    </div>
  );
}
