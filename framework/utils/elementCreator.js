export default function elementCreater (data) {
    
    let block;
    if(!data?.block) return
    block = document.createElement(data.block)

    // if(data.block = 'a') {
    //     block.href = `#/user/${data.id}`
    //     block.setAttribute('data',`/users/${data.id}`)
    // }

    data.class && block.classList.add(data.class)
    data.id && block.setAttribute('id', data.id)
    if(data.content) block.innerHTML = data.content
    
    if(data.attribute) {
        data.attribute.forEach(item => {
            for(let i in item) {
                block.setAttribute(i,item[i]);
            }
        })
    }

    if(data.child?.length) {
        data.child.forEach(item => {
            block.append(item)
        })
    }
    return block
}