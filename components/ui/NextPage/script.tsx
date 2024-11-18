import { useScript as useScript } from "@deco/deco/hooks";

export interface Props {
    text: string
    hoverText: string
}

const setup = ({ text, hoverText }: Props) => {

    const nextPage = document.getElementById('nextPage');
    const nextPageImage = document.getElementById('nextPageImage');
    const nextPageCaption = document.getElementById('nextPageCaption');

    // nextPage?.addEventListener('mouseenter', function(e) {
      
    //   nextPageImage?.classList.remove('hidden')

    //   if(nextPageCaption){
    //     nextPageCaption.textContent = hoverText
    //     nextPageCaption.classList.add('text-white')
    //     nextPageCaption.classList.add('animate-marquee')
    //   }

    // })

    // nextPage?.addEventListener('mouseleave', function(e) {

    //   nextPageImage?.classList.add('hidden')

    //   if(nextPageCaption){
    //     nextPageCaption.textContent = text
    //     nextPageCaption.classList.remove('text-white')
    //     nextPageCaption.classList.remove('animate-marquee')
    //   }

    // })
    
    // Verificar se o elemento com a classe 'tt-page-nav' possui a classe 'tt-pn-scroll'
    if (document.querySelector(".tt-page-nav").classList.contains("tt-pn-scroll")) {      
      console.log('aqui');
        
      // Seleciona todos os elementos com a classe 'tt-pn-hover-title' dentro de 'tt-page-nav'
      document.querySelectorAll(".tt-page-nav .tt-pn-hover-title").forEach(function(element) {
      console.log('aqui 1');
          
          // Envolvendo o conteúdo interno do elemento com uma tag <span>
          var span = document.createElement('span');
          while (element.firstChild) {
              span.appendChild(element.firstChild);
          }
          element.appendChild(span);

          // Clonando o título hover 7 vezes e inserindo após o original
          var pnHoverTitle = element.querySelector("span");
          for (var i = 0; i < 7; i++) {
              var clonedTitle = pnHoverTitle.cloneNode(true);
              pnHoverTitle.parentNode.insertBefore(clonedTitle, pnHoverTitle.nextSibling);
          }
      });

    } else {
      
      // Caso a condição anterior não seja satisfeita, verifica se a largura do 'tt-pn-hover-title' é maior que a do pai
      document.querySelectorAll(".tt-page-nav .tt-pn-hover-title").forEach(function(element) {
          
          if (element.offsetWidth > element.parentElement.offsetWidth) {
              
              // Envolvendo o conteúdo interno do elemento com uma tag <span>
              var span = document.createElement('span');
              while (element.firstChild) {
                  span.appendChild(element.firstChild);
              }
              element.appendChild(span);

              // Clonando o título hover 7 vezes e inserindo após o original
              var pnHoverTitle = element.querySelector("span");
              for (var i = 0; i < 7; i++) {
                  var clonedTitle = pnHoverTitle.cloneNode(true);
                  pnHoverTitle.parentNode.insertBefore(clonedTitle, pnHoverTitle.nextSibling);
              }
          }
      });
    }
    
    // Função para verificar se o elemento está visível na tela
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    // Adiciona a classe 'visible' aos elementos quando eles entram na tela
    function handleScroll() {
      const elements = document.querySelectorAll('.anim-fadeinup');
      
      elements.forEach(function(element) {
          if (isElementInViewport(element)) {
              element.classList.add('visible');
          }
      });
    }

    // Chama a função `handleScroll` no evento de scroll e ao carregar a página
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    // Chama a função uma vez ao carregar a página para aplicar em elementos que já estão visíveis
    handleScroll();


    document.querySelectorAll('.tt-page-nav').forEach(function(navElement) {
      // Verifica se existe a imagem dentro da navegação
      const imageElement = navElement.querySelector('.tt-pn-image');
      const linkElement = navElement.querySelector('.tt-pn-link');
  
      if (imageElement) {
          const ball = document.getElementById('magic-cursor');
          let ballWidth = ball.offsetWidth;
          let ballHeight = ball.offsetHeight;
          let ballOpacity = ball.style.opacity;
  
          linkElement.addEventListener('mouseenter', function() {
              ball.classList.add('tt-pn-hover-on');
              
              // Move a imagem para dentro do cursor
              ball.appendChild(imageElement);
              
              // Alterando a animação de tamanho e opacidade
              ball.style.width = '20vw';
              ball.style.height = '20vw';
              ball.style.opacity = '1';
  
              // Reproduz os vídeos
              const videos = ball.querySelectorAll('.tt-pn-image video');
              videos.forEach(function(video) {
                  video.play();
              });
          });
  
          linkElement.addEventListener('mouseleave', function() {
              ball.classList.remove('tt-pn-hover-on');
  
              // Retorna a imagem para o seu lugar original
              navElement.appendChild(imageElement);
  
              // Restaura o tamanho e a opacidade do cursor
              ball.style.width = `${ballWidth}px`;
              ball.style.height = `${ballHeight}px`;
              ball.style.opacity = ballOpacity;
  
              // Pausa os vídeos
              const videos = navElement.querySelectorAll('.tt-pn-image video');
              videos.forEach(function(video) {
                  video.pause();
              });
          });
  
          // Adiciona a classe para não esconder o cursor
          linkElement.classList.add('not-hide-cursor');
      } else {
          // Remove a classe se a imagem não existir
          linkElement.classList.remove('not-hide-cursor');
      }
  });
  


}

function NextPage(
  { text, hoverText }: Props,
) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, { text, hoverText }),
      }}
    />
  );
}
export default NextPage;