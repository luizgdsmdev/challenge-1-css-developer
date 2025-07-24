function isElementInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight - offset || document.documentElement.clientHeight - offset) &&
        rect.bottom >= offset &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateHtmlElement(element, direction){
    window.addEventListener('scroll', () => {
        if (isElementInViewport(element)) {
            element.classList.add(direction);
        }
    });
}

let challengesLogo = document.getElementById("professional-challenges-h2");
let challengesImg = document.getElementById("professional-challenges-img");
let challengesP = document.getElementById("professional-challenges-p");
let courseContentH2 = document.getElementById("course-content-h2");
let courseContentP = document.getElementById("course-content-p");
let courseContentModulesList = document.getElementById("course-content-modules-list");

updateHtmlElement(challengesLogo, "ShowImageFromLeft");
updateHtmlElement(challengesImg, "ShowTextFromRigh");
updateHtmlElement(challengesP, "ShowImageFromLeft");
updateHtmlElement(courseContentH2, "ShowTextFromBottom");
updateHtmlElement(courseContentP, "ShowImageFromLeft");
updateHtmlElement(courseContentModulesList, "ShowTextFromBottom");
