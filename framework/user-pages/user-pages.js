import { renderName } from '/framework/utils/renderName'
import { users } from '../utils/getting-users'
import elementCreater from '/framework/utils/elementCreator'
import api from '../utils/apiMiddleware'




const USER_BLOCK = elementCreater({block: 'div', class: 'user_block'})


export function userPages() {
    let usersId = window.location.hash.slice(6)
    users.then(responce => {
        responce.forEach(user => {
           if(user.id === +usersId) {
            createUserPage(user)
            
           }
        })
    })
}

function createUserPage(user) {

    const container = document.querySelector('.container')
    USER_BLOCK.innerHTML = ''
    container.innerHTML = ''
    
    createInfoPersone(user)
    createPostList(user)
    createForm()

    
    container.appendChild(USER_BLOCK);
    


    
}


function createInfoPersone(user) {

    const userNameBlock = elementCreater({ block: 'div', class: 'user_name', child: [renderName(user.name)] })
    const wrapUserBlock = elementCreater({ block: 'div', class: 'wrapper_user', child: [userNameBlock] })

    
    const userName = elementCreater({block: 'li',content: `username: ${user.username}`})
    const info_block = elementCreater({block: 'li',content: `name: ${user.name}`})
    const address = elementCreater({block: 'li', content: `city: ${user.address.city}`})
    const phone = elementCreater({block: 'li', content: `phone: ${user.phone}`})
    const website = elementCreater({block: 'li',content: `website: ${user.website}`})

    const parentLi = elementCreater({block: 'ul' ,child: [userName,info_block,address,phone,website]})
    

    const userInfoBlock = elementCreater({block: 'div',class: 'user_info_block',child: [wrapUserBlock,parentLi]}) 
    USER_BLOCK.append(userInfoBlock)
}







function createPostList(user) {

    
    const postList = elementCreater({block: 'div',class: 'post_list'})
    USER_BLOCK.append(postList);
    

    user.posts.forEach(post => {
        createPost(post)
    })


    postList.addEventListener('click',(e) => {
       if(e.target.classList.contains('delete_post')) {
            const parentPostBlock = e.target.closest('.content');
            parentPostBlock.remove();
        } 
       
    })
    

    
    
}


function createPost (post) { 
    const parentBlock = USER_BLOCK.querySelector('.post_list');
    const deletePost = elementCreater({block:'div',class:'delete_post'})
    const titleBlock = elementCreater({ block: 'div', class: 'title',child: [post.title]})
    const bodyBlock = elementCreater({ block: 'div', class: 'body',child: [post.body] })
    const wrapTextBlock = elementCreater({ block: 'div', class: 'wrapper_text', child: [titleBlock, bodyBlock]})
    const wrapper = elementCreater({ block: 'div', class: 'content', child: [wrapTextBlock,deletePost] })
    parentBlock.prepend(wrapper);
}










function createForm() {
    const button = elementCreater({block: 'button',content: 'submit',attribute:[{type:'submit'}]})
    const textTitle = elementCreater({block: 'textarea',attribute: [{required: 'required'},{name: 'title'}] })
    const textName = elementCreater({block: 'textarea',attribute: [{required: 'required'},{name: 'body'}] })
    const form = elementCreater({block: 'form',id:'createPostForm',class: 'user_form', attribute: [{name: 'test'}],child: [textTitle,textName,button]})

    const formBlock = elementCreater({block: 'div',class: 'form_block',child: [form]})

    form.addEventListener('submit',e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
            title: form.get('title'),
            body: form.get('body'),
        }
        api('POST','/posts',data)
        createPost(data);

        const textArea = e.target.querySelectorAll('textarea')
        textArea.forEach(item => {
            item.value = ''
        })
    })
    console.log()

    USER_BLOCK.append(formBlock)
 
}



















