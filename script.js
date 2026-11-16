let products = JSON.parse(localStorage.getItem("products")) || [];

let editIndex = -1;

displayProducts();

function addProduct(){

let name=document.getElementById("name").value;

let price=document.getElementById("price").value;

let category=document.getElementById("category").value;

let stock=document.getElementById("stock").value;

if(name==""||price==""||category==""||stock==""){

alert("Fill all fields");

return;

}

if(editIndex==-1){

let product={

id:Date.now(),

name:name,

price:price,

category:category,

stock:stock

};

products.push(product);

}else{

products[editIndex].name=name;

products[editIndex].price=price;

products[editIndex].category=category;

products[editIndex].stock=stock;

editIndex=-1;

}

localStorage.setItem("products",JSON.stringify(products));

clearFields();

displayProducts();

}

function displayProducts(){

let table=document.getElementById("tableBody");

table.innerHTML="";

for(let i=0;i<products.length;i++){

table.innerHTML+=`

<tr>

<td>${products[i].id}</td>

<td>${products[i].name}</td>

<td>${products[i].price}</td>

<td>${products[i].category}</td>

<td>${products[i].stock}</td>

<td>

<button class="edit" onclick="editProduct(${i})">Edit</button>

<button class="delete" onclick="deleteProduct(${i})">Delete</button>

</td>

</tr>

`;

}

document.getElementById("count").innerHTML=products.length;

}

function deleteProduct(index){

if(confirm("Delete Product?")){

products.splice(index,1);

localStorage.setItem("products",JSON.stringify(products));

displayProducts();

}

}

function editProduct(index){

document.getElementById("name").value=products[index].name;

document.getElementById("price").value=products[index].price;

document.getElementById("category").value=products[index].category;

document.getElementById("stock").value=products[index].stock;

editIndex=index;

}

function clearFields(){

document.getElementById("name").value="";

document.getElementById("price").value="";

document.getElementById("category").value="";

document.getElementById("stock").value="";

}

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.getElementById("tableBody").getElementsByTagName("tr");

for(let i=0;i<rows.length;i++){

let text=rows[i].innerText.toLowerCase();

if(text.indexOf(input)>-1){

rows[i].style.display="";

}else{

rows[i].style.display="none";

}

}

}