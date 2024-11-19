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
    if (window.innerWidth > 1024) {
      document.querySelectorAll('.magnetic-item').forEach(item => {
          const wrap = document.createElement('div');
          wrap.className = 'magnetic-wrap';
          item.parentNode.insertBefore(wrap, item);
          wrap.appendChild(item);
      });
  
      document.querySelectorAll('a.magnetic-item').forEach(link => {
          link.classList.add('not-hide-cursor');
      });
      const ball = document.getElementById('ball');
      let mouse = { x: 0, y: 0 };
      let pos = { x: 0, y: 0 };
      const ratio = 0.15; // Delay follow cursor
    
      const ballWidth = 34;
      const ballHeight = 34;
      const ballOpacity = 0.5;
      const ballBorderWidth = 2;
    
      // Define ball's initial styles
      ball.style.width = ballWidth + 'px';
      ball.style.height = ballHeight + 'px';
      ball.style.opacity = ballOpacity;
      ball.style.borderWidth = ballBorderWidth + 'px';
      ball.style.position = 'fixed';
      ball.style.transform = 'translate(-50%, -50%)';
    
      // Capture mouse movement
      document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
    
      // Update the ball's position smoothly
      function updatePosition() {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;
    
        ball.style.left = pos.x + 'px';
        ball.style.top = pos.y + 'px';
    
        requestAnimationFrame(updatePosition);
      }
    
      updatePosition(); // Start the animation loop
  
      document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
          wrap.addEventListener('mouseenter', () => {
              ball.style.width = '20vw';
              ball.style.height = '20vw';
              ball.style.opacity = '1';
          });
  
          wrap.addEventListener('mousemove', (e) => {
              parallaxCursor(e, wrap, 2);
              callParallax(e, wrap);
          });
  
          wrap.addEventListener('mouseleave', () => {
              ball.style.width = `${ballWidth}px`;
              ball.style.height = `${ballHeight}px`;
              ball.style.opacity = `${ballOpacity}`;
          });
      });
  
      function callParallax(e, parent) {
          const target = parent.querySelector('.magnetic-item');
          if (target) {
              parallaxIt(e, parent, target, 25);
          }
      }
  
      function parallaxIt(e, parent, target, movement) {
          const boundingRect = parent.getBoundingClientRect();
          const relX = e.clientX - boundingRect.left;
          const relY = e.clientY - boundingRect.top;
  
          target.style.transform = `translate(
              ${((relX - boundingRect.width / 2) / boundingRect.width) * movement}px, 
              ${((relY - boundingRect.height / 2) / boundingRect.height) * movement}px)`;
          // target.style.transition = 'transform 0.3s ease-out';
      }
  
      function parallaxCursor(e, parent, movement) {
          const rect = parent.getBoundingClientRect();
          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;
  
          pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
          pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
  
          ball.style.left = `${pos.x}px`;
          ball.style.top = `${pos.y}px`;
      }
  }
  
  
  
    
    // Verificar se o elemento com a classe 'tt-page-nav' possui a classe 'tt-pn-scroll'
    if (document.querySelector(".tt-page-nav").classList.contains("tt-pn-scroll")) {      
        
      // Seleciona todos os elementos com a classe 'tt-pn-hover-title' dentro de 'tt-page-nav'
      document.querySelectorAll(".tt-page-nav .tt-pn-hover-title").forEach(function(element) {
          
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
  
// Seleciona os elementos necessários
const magicCursor = document.querySelector("#magic-cursor");
const ball = document.querySelector("#ball");

// Função para adicionar o hover
document.querySelectorAll(".tt-page-nav").forEach((navItem) => {
    const link = navItem.querySelector(".tt-pn-link");
    const imageContainer = navItem.querySelector(".tt-pn-image");

    if (imageContainer) {
        link.addEventListener("mouseenter", () => {
            magicCursor.classList.add("tt-pn-hover-on");

            // Mover a imagem para dentro do cursor
            ball.style.width = "20vw";
            ball.style.height = "20vw";
            ball.style.opacity = "1";
            
            // Adiciona a imagem dentro do cursor (mas sem removê-la do DOM)
            const imageClone = imageContainer.cloneNode(true);
            ball.innerHTML = '';  // Limpa o conteúdo do cursor
            ball.appendChild(imageClone);  // Adiciona a imagem clonada

            // Reproduz o vídeo se houver
            const videos = imageContainer.querySelectorAll("video");
            videos.forEach(video => video.play());
        });

        link.addEventListener("mouseleave", () => {
            magicCursor.classList.remove("tt-pn-hover-on");

            // Restaura o tamanho do cursor
            ball.style.width = "34px"; // Tamanho original
            ball.style.height = "34px"; // Tamanho original
            ball.style.opacity = "0.5"; // Opacidade original

            // Remove a imagem clonada do cursor
            ball.innerHTML = '';

            // Pausa os vídeos
            const videos = imageContainer.querySelectorAll("video");
            videos.forEach(video => video.pause());
        });

        link.classList.add("not-hide-cursor");
    } else {
        const linkWithoutImage = navItem.querySelector(".tt-pn-link");
        linkWithoutImage.classList.remove("not-hide-cursor");
    }
});


// Faz aparecer o cursor
// ==============================
document.addEventListener("mouseleave", () => {
  const magicCursor = document.getElementById("magic-cursor");
  magicCursor.style.opacity = 0;
  magicCursor.style.visibility = "hidden";
});

document.addEventListener("mouseenter", () => {
  const magicCursor = document.getElementById("magic-cursor");
  magicCursor.style.opacity = 1;
  magicCursor.style.visibility = "visible";
});

document.addEventListener("mousemove", () => {
  const magicCursor = document.getElementById("magic-cursor");
  magicCursor.style.opacity = 1;
  magicCursor.style.visibility = "visible";
});
// ================================

document.querySelectorAll(".anim-fadeinup").forEach(function(element) {
  const options = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              entry.target.style.transition = "opacity 1s ease-out, transform 1s ease-out";
              entry.target.style.opacity = 1;
              entry.target.style.transform = "translateY(0)";
          }
      });
  }, options);

  element.style.opacity = 0;
  element.style.transform = "translateY(100px)";
  observer.observe(element);
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