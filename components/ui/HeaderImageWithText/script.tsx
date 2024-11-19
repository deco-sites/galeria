import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {

  const title = document.getElementById('headerImageWithText-title')
  const description = document.getElementById('headerImageWithText-description')

  if (title && description) {
      setTimeout(() => {
        title.classList.remove('translate-y-12')
        title.classList.remove('opacity-0')
      }, 500);

      setTimeout(() => {
        description.classList.remove('translate-y-12')
        description.classList.remove('opacity-0')
      }, 1500);
  }

}

function HeaderImageWithText(
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
export default HeaderImageWithText;