import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {
    
  const title = document.getElementById('headerOnlyTextToWork-title')
  const description = document.getElementById('headerOnlyTextToWork-description')

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

function HeaderOnlyTextToWork(
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
export default HeaderOnlyTextToWork;