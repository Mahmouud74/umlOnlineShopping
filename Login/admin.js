let user = getCookie('loggedUser');
if(user){
    userType= JSON.parse(user).type;
}
user=JSON.parse(user);
User.login(user.username,user.password,userType);
let productsContainer=document.getElementById('products');
for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML+=`          
    <tr>
    <td>${products[i].id}</td>
    <td>${products[i].productName}</td>
    <td>${products[i].productQuantity}</td>
    <td>${products[i].piecePrice}</td>
    <td>${products[i].productCategory}</td>
    <td>
    <button class="btn btn-primary" id=${"delete"+products[i].id}>delete</button>
    </td>
    
  </tr>`    
}
for (let i = 0; i < products.length; i++) {
    document.getElementById("delete"+products[i].id).addEventListener('click',function(){
        loggedUser.deleteProduct(products[i].id);
        document.getElementById('products').innerHTML=``;
        for (let j = 0; j < products.length; j++) {
            document.getElementById('products').innerHTML+=`<tr>
            <td>${products[j].id}</td>
            <td>${products[j].productName}</td>
            <td>${products[j].productQuantity}</td>
            <td>${products[j].piecePrice}</td>
            <td>${products[j].productCategory}</td>
            <td>
                <button class="btn btn-primary" id=${"delete"+products[j].id}>delete</button>
            </td>
    
        </tr>`
    
        }
    })        
}
let selectCategory = document.getElementById('productCategory')
for (let i = 0; i < categories.length; i++) {
    selectCategory.options[selectCategory.options.length] = new Option(categories[i].categoryName, categories[i].categoryName);
}
document.getElementById("addProduct").addEventListener("click",function(){
    loggedUser.addProduct(document.getElementById('productName').value ,document.getElementById('productQuantity').value , document.getElementById('productPrice').value ,document.getElementById('productCategory').value )
    productsContainer.innerHTML=``;
    for (let i = 0; i < products.length; i++) {
        productsContainer.innerHTML+=`          
        <tr>
        <td>${products[i].id}</td>
        <td>${products[i].productName}</td>
        <td>${products[i].productQuantity}</td>
        <td>${products[i].piecePrice}</td>
        <td>${products[i].productCategory}</td>
        <td>
        <button class="btn btn-primary" id=${"delete"+products[i].id}>delete</button>
        </td>
        
      </tr>`    
    }
})
///categories
var categoryContainer = document.getElementById('categories')
for (let i = 0; i < categories.length; i++) {
    categoryContainer.innerHTML+=`          
    <tr>
    <td>${categories[i].id}</td>
    <td>${categories[i].categoryName}</td>
    <td>
    <button class="btn btn-primary" id=${"delete"+categories[i].id}>delete</button>
    </td>
    
  </tr>`    
}
for (let i = 0; i < categories.length; i++) {
    document.getElementById("delete"+categories[i].id).addEventListener('click',function(){
        loggedUser.deleteCategory(categories[i].id);
        document.getElementById('categories').innerHTML=``;
        for (let j = 0; j < categories.length; j++) {
            document.getElementById('categories').innerHTML+=`<tr>
            <td>${categories[j].id}</td>
            <td>${categories[j].categoryName}</td>
            <td>
                <button class="btn btn-primary" id=${"delete"+categories[j].id}>delete</button>
            </td>
    
        </tr>`
    
        }
    })        
}
document.getElementById("addCategory").addEventListener("click",function(){
    loggedUser.addCategory(document.getElementById('categoryName').value )
    categoryContainer.innerHTML=``;
    for (let i = 0; i < categories.length; i++) {
        categoryContainer.innerHTML+=`<tr>
        <td>${categories[i].id}</td>
        <td>${categories[i].categoryName}</td>
        <td>
            <button class="btn btn-primary" id=${"delete"+categories[i].id}>delete</button>
        </td>

    </tr>`
    }
})


///USERS
var usersContainer = document.getElementById('users');
for (let i = 0; i < users.length; i++) {
    usersContainer.innerHTML+=`          
    <tr>
    <td>${users[i].id}</td>
    <td>${users[i].name}</td>
    <td>${users[i].username}</td>
    <td>${users[i].email}</td>
    <td>${users[i].type}</td>
    <td>
    <button class="btn btn-primary" id=${"delete"+users[i].id}>delete</button>
    </td>
    
  </tr>`    
}
for (let i = 0; i < users.length; i++) {
    document.getElementById("delete"+users[i].id).addEventListener('click',function(){
        loggedUser.deleteUser(users[i].id);
        document.getElementById('users').innerHTML=``;
        for (let j = 0; j < users.length; j++) {
            document.getElementById('users').innerHTML+=`<tr>
            <td>${users[j].id}</td>
            <td>${users[j].name}</td>
            <td>${users[j].username}</td>
            <td>${users[j].email}</td>
            <td>${users[j].type}</td>
            <td>
                <button class="btn btn-primary" id=${"delete"+users[j].id}>delete</button>
            </td>
    
        </tr>`
    
        }
    })        
}
document.getElementById("addUser").addEventListener("click",function(){
    loggedUser.addUser(document.getElementById('name').value,document.getElementById('userName').value,document.getElementById('email').value,document.getElementById('password').value,document.getElementById('userType').value )
    usersContainer.innerHTML=``;
    for (let i = 0; i < users.length; i++) {
        usersContainer.innerHTML+=`<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].username}</td>
        <td>${users[i].email}</td>
        <td>${users[i].type}</td>

        <td>
            <button class="btn btn-primary" id=${"delete"+users[i].id}>delete</button>
        </td>

    </tr>`
    }
})
