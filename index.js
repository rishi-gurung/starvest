var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if ((prevScrollpos) > currentScrollPos) {
        document.getElementById("topbar").style.top = "0";
    } else {
        document.getElementById("topbar").style.top = "-230px";
    }
    prevScrollpos = currentScrollPos;
}

function explore() {
    document.getElementsByTagName('body').scrollTop += 1000;
}

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function() {
                scroll(c, a, b, i);
            }, 20);
        }
        // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};