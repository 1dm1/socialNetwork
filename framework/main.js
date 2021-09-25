import { appRoutes } from './utils/app.rouser'
import { users } from './utils/getting-users'
import { userPages } from './user-pages/user-pages'
import elementCreater from '/framework/utils/elementCreator'



const currentUrl = window.location.hash






createComponent(currentUrl,appRoutes);

window.addEventListener('hashchange', (e) => {
    goToUser(e.target.location.hash, appRoutes)
    
})



function goToUser(url,routeArr) {
    const container = document.querySelector('.container')
    const homePageBlock = elementCreater({block: 'div',class: 'home_page'})
    

    let route = routeArr.find(r => r.path === url)


    if(typeof route === 'undefined') {
        const notPage = routeArr.find(r => r.path === '**')
        clearBlock(container)
        homePageBlock.innerHTML = notPage.component.template

    }else {
        clearBlock(container)
        route.component()
    }

    container.append(homePageBlock);
}




function createComponent(url,arrRousers) {
    users
    .then(date => date.forEach(user => {
        arrRousers.push({path: `#user/${user.id}`, component: userPages})
    }))
    .then(() => goToUser(url,appRoutes)) 
    
}



function clearBlock(block) {
    block.innerHTML = ''
}
























