window.onload = function () {
    const cursor = document.querySelector(".cursor");

    function Trailer(e) {
        gsap.to(cursor, { duration: 0.2, left: e.pageX + 10, top: e.pageY + 10});
    }

    document.addEventListener("mousemove", Trailer);
}
