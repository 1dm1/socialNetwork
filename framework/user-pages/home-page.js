
import { renderName } from '/framework/utils/renderName'
import { component } from '../utils/component'
import { users } from '../utils/getting-users'



export function homePage() {
    users
    .then(date => date.forEach(user => {
        createComponents(user)
    })) 
}

function createComponents({name,id}) {
   const user = {
        selector: 'user',
        template: `
            <a class="user_name" href="user/${id}" > ${renderName(name)} </a>
        `,
        id: id
    }
    component(user)
}







