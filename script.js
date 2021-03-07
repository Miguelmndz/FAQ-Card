const accordion = document.getElementsByClassName('card-accordion-item')
const accordionContent = document.getElementsByClassName('card-accordion-content')
const accordionHeader = document.getElementsByClassName('card-accordion-header')
const accordionArrow = document.getElementsByClassName('arrow')

for (let i = 0; i < accordion.length; i++) {
  let currAcc = accordion[i]
  let currAccContent = accordionContent[i]
  let currAccHeader = accordionHeader[i]
  let curraccordionArrow = accordionArrow[i]

  currAcc.addEventListener("click", () => {
    if (currAccContent.style.maxHeight == 0) {
      currAccHeader.style.fontWeight = '700'
      currAccContent.style.maxHeight = currAccContent.scrollHeight + 'px'
      currAccContent.style.marginBottom = '15px'
      curraccordionArrow.style.transform = 'rotate(180deg)'
      curraccordionArrow.style.transition = '0.2s'

    } else {
      currAccHeader.style.fontWeight = ''
      currAccContent.style.maxHeight = null
      currAccContent.style.marginBottom = '0px'
      curraccordionArrow.style.transform = 'rotate(0)'
      curraccordionArrow.style.transition = '0.2s'
      
    }
  })
  
}
