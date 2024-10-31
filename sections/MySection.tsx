import { Section } from "deco/blocks/section.ts";

export interface Props {
  title: string;
  sections: Section[];
}


// Implemente a seção
function LoadComponent(
  { Component, props } : Section
) {
  return (
    <Component {...props} />
  );
}

// Implemente a seção
export default function containerSection(
  { 
    sections = [], 
    title
  }: Props
) {
  return (
    <div className="">
      <h1>{title}</h1>
      <div>
        {sections?.map((section) => (
          LoadComponent(section)
        ))}
      </div>
    </div>
  );
}