const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body');
const btnCollapse = $$('.btn-collapse');

btnCollapse.forEach(fc => {
    function handleClick() {
        const bodyRect = body.getBoundingClientRect();
        const isDeviceSmallerScreen1650 = bodyRect.width < 1650;
        const collapseItem = getParentElement(this);
        const down = this.classList.contains('down')
        const up = this.classList.contains('up')
       
        let collapseContent;
        if(isDeviceSmallerScreen1650) {
            collapseContent = collapseItem.querySelector('.collapse-content');
        }

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

            if(isDeviceSmallerScreen1650) {
                console.log('tt');
                collapseContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest',
                })
            }
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