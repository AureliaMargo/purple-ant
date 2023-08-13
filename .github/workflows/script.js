

(function() {
  var fsSlider = new FsLibrary('.cms-feed-one')  

  fsSlider.slider({
    sliderComponent: '.instagram-slider', 
    itemsPerSlide: 1  
  })
})();

(function() {
  var fsSliderTwo = new FsLibrary('.cms-feed-two') 
  fsSliderTwo.slider({
    sliderComponent: '.instagram-cards-slider', 
    itemsPerSlide: 1  
  })
})();

const accSettings = {
  speed: 300, 
  oneOpen: true, 
  offsetAnchor: true, 
  offsetFromTop: 180, 
  scrollTopDelay: 400, 
  
  classes: {
  	accordion: 'js-accordion',
    header: 'js-accordion-header',
    item: 'js-accordion-item',
    body: 'js-accordion-body',
    icon: 'js-accordion-icon',
    active: 'active',
  }
};


const prefix = accSettings.classes

const accordion = (function(){
  const accordionElem = $(`.${prefix.accordion}`)
  const accordionHeader = accordionElem.find(`.${prefix.header}`)
  const accordionItem = $(`.${prefix.item}`)
  const accordionBody = $(`.${prefix.body}`)
  const accordionIcon = $(`.${prefix.icon}`)
  const activeClass = prefix.active
    
  return {
    init: function(settings) {
      accordionHeader.on('click', function() {
        accordion.toggle($(this));
        if(accSettings.offsetAnchor) {
        	setTimeout(() => { 
        		$('html').animate({scrollTop: $(this).offset().top-accSettings.offsetFromTop}, accSettings.speed);
    			}, accSettings.scrollTopDelay);
        }
      });
      
      $.extend(accSettings, settings); 

      if(settings.oneOpen && $(`.${prefix.item}.${activeClass}`).length > 1) {
        $(`.${prefix.item}.${activeClass}:not(:first)`).removeClass(activeClass).find(`.${prefix.header} > .${prefix.icon}`).removeClass(activeClass);
      }
      $(`.${prefix.item}.${activeClass}`).find(`> .${prefix.body}`).show();
      
    },
    
    toggle: function($this) {
      if(accSettings.oneOpen && $this[0] != $this.closest(accordionElem).find(`> .${prefix.item}.${activeClass} > .${prefix.header}`)[0]) {
        $this.closest(accordionElem).find(`> .${prefix.item}`).removeClass(activeClass).find(accordionBody).slideUp(accSettings.speed);
        $this.closest(accordionElem).find(`> .${prefix.item}`).find(`> .${prefix.header} > .${prefix.icon}`).removeClass(activeClass);
      }
      $this.closest(accordionItem).toggleClass(`${activeClass}`).find(`> .${prefix.header} > .${prefix.icon}`).toggleClass(activeClass);
      $this.next().stop().slideToggle(accSettings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init(accSettings);
});



const target_1 = $(".nav-link");
var position_target_1 = getElementPosition(target_1, true);

ScrollTrigger.addEventListener("refreshInit", function () {
  position_target_1 = getElementPosition(target_1, true);
});

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    trigger: ".section_about",
    color: "#1c1326",
  },
  {
    trigger: ".section_services",
    color: "#1c1326",
  },
  {
    trigger: ".section_blog",
    color: "#1c1326",
  },
  {
    trigger: ".section_follow",
    color: "#1c1326",
  },
];

sections.forEach((section) => {
  gsap.to(".nav-link", {
    scrollTrigger: {
      trigger: section.trigger,
      start: () => "top " + position_target_1,
      end: () => "+=" + target_1.outerHeight() + " " + position_target_1,
      scrub: 1,
    },
    color: section.color,
  });

  gsap.to(".nav-link", {
    scrollTrigger: {
      trigger: section.trigger,
      start: () => "bottom " + position_target_1,
      end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
      scrub: 1,
    },
    color: "#dfcefd",
    immediateRender: false,
  });
});

function getElementPosition(element, bottom = false) {
  let position = element.offset().top - $(window).scrollTop();
  return !bottom ? position : position + element.outerHeight();
}

document.addEventListener("DOMContentLoaded", function () {
  const sectionCaseStudies = document.querySelector(".section_case-studies");
  const purpleCircle = document.querySelector(".purple-circle");

  function animateOnScroll() {
    const sectionPosition = sectionCaseStudies.getBoundingClientRect();
    const sectionTop = sectionPosition.top;
    const sectionHeight = sectionPosition.height;
    const viewportHeight = window.innerHeight;
    const positionThreshold = viewportHeight * 0.5;

    if (sectionTop - positionThreshold <= 0 && sectionTop + sectionHeight >= positionThreshold) {
      purpleCircle.classList.add("animate-on-scroll");
    } else {
      purpleCircle.classList.remove("animate-on-scroll");
    }
  }

  animateOnScroll();

  window.addEventListener("scroll", animateOnScroll);
});

      $(document).ready(()=>{
            let isMenuAlreadyOpen = false;
            $('.button.is-menu').on('click',()=>{
                  $('body').css("overflow",isMenuAlreadyOpen?"auto":"hidden")
                  isMenuAlreadyOpen = !isMenuAlreadyOpen
            })
      })
      
       $(document).ready(()=>{
            let isMenuAlreadyOpen = false;
            $('.button.is-close, .nav-link, .apla').on('click',()=>{
                  $('body').css("overflow",isMenuAlreadyOpen?"auto":"visible")
                  isMenuAlreadyOpen = !isMenuAlreadyOpen
            })
      })
