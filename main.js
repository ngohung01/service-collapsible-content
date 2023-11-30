const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const fiChevrons = $$('.fi-chevron');

fiChevrons.forEach(fc => {
    // console.log(fc.parenElement)
    function handleClick() {
        // console.log(getParentElement(this))
        const collapseItem = getParentElement(this);
        const down = this.classList.contains('down')
        const up = this.classList.contains('up')
        if(down){
            // Change class of collapse-item
            collapseItem.classList.remove('active')

            // Change class of icon chevron
            this.classList.remove('down')
            this.classList.add('up')
        }else if(up){
            // Change class of collapse-item
            collapseItem.classList.add('active')

            // Change class of icon chevron
            this.classList.remove('up')
            this.classList.add('down')
        }
    }
    fc.addEventListener('click',handleClick)
});

function getParentElement(element) {
    let parent = element.parentElement;
    while(!parent.classList.contains('collapse-item')){
        parent=parent.parentElement;
    }
    return parent
}