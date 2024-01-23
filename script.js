function locomoticeWithScroll() {
  gsap.registerPlugin(ScrollTrigger);
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

function mousecursor() {
  var page1Content = document.querySelector("#page1-content")
  var cursor = document.querySelector("#cursor")

  page1Content.addEventListener("mousemove", function (yepointerhai) {
    gsap.to(cursor, {
      x: yepointerhai.x,
      y: yepointerhai.y,
    })
  })
  // above is for smooth movement
  // page1Content.addEventListener("mousemove",function(yepointerhai){
  //     cursor.style.left=yepointerhai.x+"px";
  //     cursor.style.top=yepointerhai.y+"px";
  // })
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    })
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    })
  });
}

function swiperjs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay: false,
    spaceBetween: 30,
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
}

function imageslider() {
  var images = ["https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048", "https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048", "https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048", "https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048", "https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=2048"];
  let j = 0;
  const element = document.getElementById("slider");
  for (let i = 0; i < 50; i++) {
    const imgtag = document.createElement("img");
    imgtag.setAttribute("src", images[j]);
    element.appendChild(imgtag);
    j = j + 1;
    if (j == 5) {
      j = 0;
    }
  }
}

function mousecursor2() {
  var cursor2 = document.getElementById("cursor2");
  var page4 = document.getElementById("page4");
  page4.addEventListener("mouseenter", function () {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1,
    })
  })
  page4.addEventListener("mouseleave", function () {
    gsap.to(cursor2, {
      scale: 0,
      opacity: 0,
    })
  })
  page4.addEventListener("mousemove", function (yepointerhai) {
    gsap.to(cursor2, {
      x: yepointerhai.x,
      y: yepointerhai.y,
    })
  })
}

function loader() {
  var tl = gsap.timeline();
  tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  })
  tl.to("#loader h3", {
    x: -40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  })
  tl.to("#loader", {
    opacity: 0,
  })
  tl.to("#loader", {
    display: "none",
  })
  tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
  })
}

function lastpageanimation() {
  gsap.from("#page0 h1 span", {
    y: -100,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      // markers:true,
      start: "top 50%",//matlab page6 ka top jab scroller ke 50% ko cross kare 
      end: "+=100",//matlab page6 ka top se 100 px neeche se end ho animation end scroller 50% pe hoga 
      scrub: 2,
    }
  })
}

function page2animation() {
  gsap.from("#page2 p", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers: true,
      start: "top 40%",
      end: "top 60%",
      scrub: 2,
    }
  })
}
locomoticeWithScroll()
mousecursor()
swiperjs()
imageslider()
mousecursor2()
loader()
lastpageanimation()
page2animation()