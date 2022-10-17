let tabs = document.querySelectorAll(".tab");
let tabsContent = document.querySelectorAll(".tabContent")

tabs.forEach((tab)=> {
    tab.addEventListener('click',event => activeTab(event))
})

function activeTab (event) {

    tabsContent.forEach((el)=> {
        el.classList.remove('active')
    })
    tabs.forEach((el)=> {
        el.classList.remove('pressed')
    })
    

    for (let i = 0; i < tabsContent.length; i++) {
        if (tabs[i] === event.target ) {
           tabsContent[i].classList.add('active')
           tabs[i].classList.add('pressed')
        }
    }
}