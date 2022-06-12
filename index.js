"use strict"

const modalAlert=document.getElementById("alert");if(window.matchMedia("(max-width: 936px)").matches){const e=document.getElementById("close-modal");modalAlert.classList.add("alert--show"),e.addEventListener("click",(()=>{modalAlert.classList.remove("alert--show")}))}

const getCellListClass = (state) => {
    let celdaListClass = ['celda-list']
    celdaListClass.push(celdaListClass[0] += state ? '--top' : '--down')

    return celdaListClass
}

const createCellList = (listSate) => {
    const cellList = document.createElement('UL')
    cellList.classList.add(...getCellListClass(listSate))

    const cellElement = `<li class="celda">
        <img src="./celda.png" class="celda__content" />
    </li>`

    for (let i = 0; i < 10; i++) {
        cellList.innerHTML += cellElement
    }

    return cellList
}

const createCellGroup = () => {
    const cellListGRoup = document.createElement('DIV')
    cellListGRoup.classList.add('cell-list-group')

    let isTopTheCellList = false

    for (let i = 0; i < 2; i++) {
        const cellList = createCellList(isTopTheCellList)
        cellListGRoup.appendChild(cellList)

        isTopTheCellList = !isTopTheCellList
    }

    return cellListGRoup
}

const container = document.getElementById('container')

for (let i = 0; i < 2; i++) {
    container.appendChild(createCellGroup())
}

const colors = ['#9656a1', '#ff8ba7', '#e78fb3', '#c3f0ca', '#004643', '#36ABA6', '#4C727A', '#A4D7AE', '#595EE8', '#F39A4C', '#DE8F65', '#DE8A46', '#B95B1A', '#803313', '#805ABC']

const generateColorElements = (colors) => {
    const colorsFragment = document.createDocumentFragment()
    colors.forEach(color => {
        const colorElement = document.createElement('LI')
        colorElement.classList.add('color')
        colorElement.setAttribute('id', color)
        colorElement.style.backgroundColor = color
        colorElement.innerHTML = `<img src="./icons/eye.svg" class="color__icon">`

        colorsFragment.appendChild(colorElement)
    })

    return colorsFragment
}

const colorListElement = document.getElementById('colors-list')
colorListElement.appendChild(generateColorElements(colors))

const removeColorHoverClass = () => {
    for (let childrenIndex = 0; childrenIndex < colorListElement.children.length; childrenIndex++) {
        colorListElement.children.item(childrenIndex)
            .children.item(0).classList.remove('color__icon--active')
    }
}

colorListElement.addEventListener('click', (e) => {
    if(e.target.nodeName == 'IMG') {
        document.body.style.backgroundColor = e.target.parentNode.id
        removeColorHoverClass()
        e.target.classList.add('color__icon--active')
    }
})
