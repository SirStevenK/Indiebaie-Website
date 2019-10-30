// imagesSlideshow preset

function setImageSlideshow(e, index) {
    // from circle 
    var slideshow = e.parentElement.parentElement;
    var img_slideshow = slideshow.firstElementChild
    img_slideshow.src = imagesSlideshow[index];

    updateCircleSlideshow(slideshow, index)
}

function switchImageSlideshow(e, direction) {
    var slideshow = e.parentElement;
    var img_slideshow = slideshow.firstElementChild
    var current_img = getCurrentIndexImageSlideshow(slideshow);
    var number_img = getNumberImageSlideshow(slideshow);

    if (direction == "left") {
        if (current_img-1 >= 0) current_img = current_img-1;
        else current_img = number_img-1;
    }
    else {
        if (current_img+1 < number_img) current_img = current_img+1;
        else current_img = 0;
    }
    img_slideshow.src = imagesSlideshow[current_img];

    updateCircleSlideshow(slideshow, current_img)
}

function getNumberImageSlideshow(slideshow) {
    var bottom = slideshow.querySelector("div.bottom");
    var list_circle = bottom.querySelectorAll("i");

    return list_circle.length;
}

function getCurrentIndexImageSlideshow(slideshow) {
    var bottom = slideshow.querySelector("div.bottom");
    var list_circle = bottom.querySelectorAll("i");
    var index = -1;
    for (var i = 0; i < list_circle.length; i++) {
        var element = list_circle[i];
        if (!(element.classList.contains("outline"))) {
            index = i;
            break;
        }
    }
    return index;
}

function updateCircleSlideshow(slideshow, index) {
    var bottom = slideshow.querySelector("div.bottom");
    var list_circle = bottom.querySelectorAll("i");
    for (var i = 0; i < list_circle.length; i++) {
        var element = list_circle[i];
        if (index == i) element.classList.remove("outline")
        else element.classList.add("outline")
    }
}