gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
$(document).ready(function () {
    const body = $("body");
    const content = $(".content");
    const loading = $("#loading");
    const loadingSVG = $("#loading > svg");
    const loadingH1 = $("#loading > h1");
    const container1 = $(".container1");
    const nav = $(".container1 > nav");
    const navLinks = $(".container1 > nav > ul >li");
    const redBox = $("#one");
    console.log(redBox);
    console.log(navLinks);
    const timeOut1 = setTimeout(preloader, 1000);
    const timeOut2 = setTimeout(postloader, 4000);

    body.on("load", function () {
        preloader();
    });

    function preloader() {
        loading.addClass("displayed");
        loading.removeClass("nodisplay");
        console.log("loading after 5s");
        let tl1 = gsap.timeline();
        // gsap.from(
        tl1.from(
            // ".container", {
            container1, {
                backgroundColor: "#000",
                autoAlpha: 0,
                y: -200,
                ease: "bounce.out" /*"elastic.out(1, 0.3)"*/ ,
                duration: 1,
            });
    }

    function postloader() {
        let tl2 = gsap.timeline({});
        tl2.to(loadingH1, {
                x: "-200%",
                autoAlpha: 0,
                duration: 0.7
            })
            .to(loadingSVG, {
                y: "-200%",
                autoAlpha: 0,
                duration: 0.7
            }, "-=0.3")
            .to(nav, {
                autoAlpha: 1,
                duration: 0.7
            })
            .from(navLinks, {
                opacity: 0,
                stagger: 0.3
            })
            .to(loading, {
                "display": "none",
                duration: 0.1
            });
        loading.remove();
    }
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: container1,
            markers: {
                startColor: "red",
                endColor: "green",
                fontSize: "18px",
                fontWeight: "bold",
                indent: 20
            },
            scrub: 2,
            pin: true,
            start: "70px 70px",
            pinSpacing: true,
        }
    });
    tl3.fromTo(redBox, {
        x: "-100%",
        backgroundColor: "red",
        duration: 2
    }, {
        x: "0%",
        backgroundColor: "blue"
    })

});