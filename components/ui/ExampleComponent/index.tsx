import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

function ExampleComponent({ }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <Script />
    </>
  );
}

export default ExampleComponent;