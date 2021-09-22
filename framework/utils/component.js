import elementCreater from '/framework/utils/elementCreator'



export function component(user) {
    
    const parentBlock = document.querySelector('.home_page')
    if(!parentBlock) throw new Error(`Component with ${user.selector} not found`)
    const element = elementCreater({block: 'div',class: 'wrapper_user',content: user.template})
    element.addEventListener('click',() => {
        location.href = `http://localhost:3000/#user/${user.id}`
    })
    
    
    parentBlock.append(element)
}


  




