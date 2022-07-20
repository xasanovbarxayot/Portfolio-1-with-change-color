var typed = new Typed(".typing", {
    strings: ["", "Web designer", "Web developer", "Graphic designer"],
    typeSpeed: 100,
    BackSpeed: 600,
    loop: true
})
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totlaNavList = navlist.length,
    allSection = document.querySelectorAll(".section")
for (let i = 0; i < totlaNavList; i++) {

    const a = navlist[i].querySelector("a")

    a.addEventListener("click", () => {
        removeBackSection()
        for (let j = 0; j < totlaNavList; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                addBackSection(j)

            }
            navlist[j].querySelector("a").classList.remove("active")


        }
        a.classList.add("active")
        showSection(a)
    })

}

function showSection(element) {
    const target = element.getAttribute("href").split("#")[1]
    allSection.forEach((el) => {
        el.classList.remove("active")
    })
    document.querySelector("#" + target).classList.toggle("active")

}

function removeBackSection() {
    allSection.forEach((el) => {
        el.classList.remove("back-section")
    })
}

function addBackSection(num) {
    allSection[num].classList.add("back-section")
}

function upDateNav(element) {
    navlist.forEach((el) => {
        el.querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1]
        if (target === el.querySelector("a").getAttribute("href").split("#")[1]) {
            el.querySelector("a").classList.add("active")
        }

    })
}
document.querySelector(".hire_me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index")
    showSection(this)
    upDateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})
const navTooglerBtn = document.querySelector(".nav_toggler"),
    aside = document.querySelector(".aside");
navTooglerBtn.addEventListener("click", () => {
    asideSectionTooglerBtn()
})

function asideSectionTooglerBtn() {
    aside.classList.toggle("open")
    navTooglerBtn.classList.toggle("open")
    allSection.forEach((el) => {
        el.classList.toggle("open")
    })
}