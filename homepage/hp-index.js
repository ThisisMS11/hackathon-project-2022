const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const mainimage = document.getElementById("mainimage");
const linktopage = document.getElementById("linktopage");



console.log(linktopage.href);
// adding click event now.
card1.addEventListener("click", () => {
    const image = Array.from(card1.children)[0];
    const source = image.src;

    let bimage = document.querySelector('.outermost-container');
    let pseudoelement = getComputedStyle(bimage, '::before');

    bimage.style.setProperty(`--back`, `url(${source})no-repeat center center/cover`);

    mainimage.src = source;
    linktopage.href = "http://127.0.0.1:5502/modelx/modelx-index.html";
    console.log("link : ", linktopage.href);

})
card2.addEventListener("click", () => {
    const image = Array.from(card2.children)[0];
    const source = image.src;

    let bimage = document.querySelector('.outermost-container');
    let pseudoelement = getComputedStyle(bimage, '::before');

    bimage.style.setProperty(`--back`, `url(${source})no-repeat center center/cover`);

    mainimage.src = source;

    linktopage.href = "http://127.0.0.1:5502/modely/modely-index.html";
    console.log("link : ", linktopage.href);


})
card3.addEventListener("click", () => {
    const image = Array.from(card3.children)[0];
    const source = image.src;

    let bimage = document.querySelector('.outermost-container');
    let pseudoelement = getComputedStyle(bimage, '::before');

    bimage.style.setProperty(`--back`, `url(${source})no-repeat center center/cover`);

    mainimage.src = source;

    linktopage.href = "http://127.0.0.1:5502/model3/model3-index.html";
    console.log("link : ", linktopage.href);

})
card4.addEventListener("click", () => {
    const image = Array.from(card4.children)[0];
    const source = image.src;

    let bimage = document.querySelector('.outermost-container');
    let pseudoelement = getComputedStyle(bimage, '::before');

    bimage.style.setProperty(`--back`, `url(${source})no-repeat center center/cover`);
    // linktopage.href = "http://127.0.0.1:5502/deletefolder/4.html";
    console.log("link : ", linktopage.href);

    mainimage.src = source;

})
card5.addEventListener("click", () => {
    const image = Array.from(card5.children)[0];
    const source = image.src;

    let bimage = document.querySelector('.outermost-container');
    let pseudoelement = getComputedStyle(bimage, '::before');

    bimage.style.setProperty(`--back`, `url(${source})no-repeat center center/cover`);
    // linktopage.href = "http://127.0.0.1:5502/deletefolder/5.html";
    console.log("link : ", linktopage.href);

    mainimage.src = source;

})

// js for the sidebar appears here
const sidebar = document.getElementById("sidebar");
const sidemenu = document.getElementById("side-menu");
sidemenu.addEventListener("click", () => {
    console.log(sidemenu);
    console.log(sidebar);
    sidebar.classList.toggle("sidebar-show");
    console.log(sidebar);

})