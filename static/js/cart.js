// console.log('Hello world')

var updateBtns = document.getElementsByClassName('update-cart')
for (i=0; i<updateBtns.length; i++){
    updateBtns[i].addEventListener('click',function(){
        var product = this.dataset.product
        var action = this.dataset.action
        console.log('productId:',product, 'action:',action)

        console.log('userId:',user)
        if (user == 'AnonymousUser'){
            console.log('User is not authenticated')
        }
        else{
            updateUserOrder(product,action)
        } 
    })
}
function updateUserOrder(product,action){
    console.log('User is Authenticated sending data...')
    var url = '/update_item/'
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId':product,'action':action})
    })
    .then((response) =>{
        return response.json()
    })
    .then((data)=>{
        console.log('Data:',data)
        location.reload()
    }

    )

}