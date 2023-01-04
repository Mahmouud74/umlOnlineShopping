let user = getCookie('loggedUser');
if(user){
    userType= JSON.parse(user).type;
}
user=JSON.parse(user);
User.login(user.username,user.password,userType);

if(cart){
    loggedUser.cartObj.cart=cart;
    for (let i = 0; i < cart.length; i++) {
        document.getElementById('tbody').innerHTML+=`<tr>
        <td>
            ${cart[i].productName}
        </td>
        <td>
            ${cart[i].quantity}
        </td>
        <td>
            ${cart[i].piecePrice}
        </td>
        <td>
            ${cart[i].totalPrice}
        </td>
        <td>
        <button class="btn btn-primary" id=${cart[i].prodId+"1"}>delete</button>
        </td>
        <td>
        <button class="btn btn-primary"id=${cart[i].prodId} onclick=>edit</button>
        </td>

    </tr>`;

    }

    for (let i = 0; i < cart.length; i++) {
        document.getElementById(cart[i].prodId+"1").addEventListener('click',function(){
            loggedUser.deleteFromCart(cart[i].prodId);
            document.getElementById('tbody').innerHTML+=``;
            for (let i = 0; i < cart.length; i++) {
                document.getElementById('tbody').innerHTML+=`<tr>
                <td>
                    ${cart[i].productName}
                </td>
                <td>
                    ${cart[i].quantity}
                </td>
                <td>
                    ${cart[i].piecePrice}
                </td>
                <td>
                    ${cart[i].totalPrice}
                </td>
                <td>
                <button class="btn btn-primary" id=${cart[i].prodId+"1"}>delete</button>
                </td>
                <td>
                <button class="btn btn-primary"id=${cart[i].prodId} onclick=>edit</button>
                </td>
        
            </tr>`
        
            }
        })        
    }
    document.getElementById('deleteCart').addEventListener('click',function(){
        loggedUser.deleteAllCart();
        document.getElementById('tbody').innerHTML=``;

    })
    document.getElementById("addOrder").addEventListener("click",function(){
        loggedUser.addOrder();
        document.getElementById('tbody').innerHTML=``;
    })
}
else{
    cart=[]
}
