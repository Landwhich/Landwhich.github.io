const gallery = document.getElementById("portfolio-grid-1");
gallery.addEventListener('mouseover', function (e) {
    let target = e.target

    if (target.tagName == "IMG") {
        target.classList.add('zoom')
    }
});

gallery.addEventListener('mouseout', function (e) {
    let target = e.target

    if (target.tagName == "IMG") {
        target.classList.remove('zoom')
    }
});
const shoe__gallery = document.getElementById("portfolio-grid-2");
shoe__gallery.addEventListener('mouseover', function (e) {
    let target = e.target

    if (target.tagName == "IMG") {
        target.classList.add('zoom')
    }
});
shoe__gallery.addEventListener('mouseout', function (e) {
    let target = e.target

    if (target.tagName == "IMG") {
        target.classList.remove('zoom')
    }
});