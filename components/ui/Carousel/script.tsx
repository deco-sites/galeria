import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {

    const TWEEN_FACTOR_BASE = 0.52;
    let tweenFactor = 0;
    let tweenNodes = [];

    // Função que assegura que o número esteja dentro de um intervalo
    const numberWithinRange = (number: number, min: number, max: number) =>
      Math.min(Math.max(number, min), max);

    // Configura os nós de slides para aplicar o efeito de escala
    const setTweenNodes = (emblaApi: any) => {

      tweenNodes = emblaApi.slideNodes().map((slideNode: any) => {
        return slideNode.querySelector('.embla__slide__number');
      });
    };

    // Configura o fator de tween de acordo com o número de slides
    const setTweenFactor = (emblaApi: any) => {
      tweenFactor = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    };

    // Aplica a escala nos slides com base na posição de rolagem
    const tweenScale = (emblaApi: any, eventName: string) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap: number, snapIndex: number) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex: number) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          // Manipulação de loop do Embla
          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem: any) => {
              const target = loopItem.target();
              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);
                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `scale(${scale})`;
          }
        });
      });
    };

    // Função para configurar o efeito de escala
    const setupTweenScale = (emblaApi: any) => {
      setTweenNodes(emblaApi);
      setTweenFactor(emblaApi);
      tweenScale(emblaApi, 'scroll'); // Pode ser usado também em outros eventos como 'slideFocus'

      emblaApi
        .on('reInit', setTweenNodes)
        .on('reInit', setTweenFactor)
        .on('reInit', tweenScale)
        .on('scroll', tweenScale)
        .on('slideFocus', tweenScale);

      return () => {
        tweenNodes.forEach((slide: any) => slide.removeAttribute('style'));
      };
    };
    
    // Carregando Embla diretamente via CDN
    const emblaScript = document.createElement("script");
    emblaScript.src = "https://cdn.jsdelivr.net/npm/embla-carousel@latest";
    emblaScript.onload = () => {

      const divEmbla = document.getElementById('emblaCarousel')

      const embla = window.EmblaCarousel(divEmbla, { 
        loop: true, 
        speed: 1 
      });

      console.log("Embla initialized via CDN");

      // Configura o efeito de tweenScale
      setupTweenScale(embla);

      return () => embla.destroy();

    };
    
    document.body.appendChild(emblaScript);

}

function EmblaCarousel(
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
export default EmblaCarousel;