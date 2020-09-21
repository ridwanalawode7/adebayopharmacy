var t = setInterval(cartList, 1);
function cartList(){
var cartTable = document.getElementById("cart_table");
var tableChild= cartTable.childNodes;
var childNo = tableChild.length;
document.getElementById("quan").innerHTML = String(childNo-2);


if(document.getElementsByClassName("amount").length>0){
var amount_list = document.getElementsByClassName("amount");
var m = 0;

for(j = 0; j<amount_list.length; j++){
var m1= amount_list[j].innerHTML;
var m2= parseFloat(m1);
var m =m+m2;

document.getElementById("orderButton").innerHTML="Place Order(\u20a6"+m+")";
}

}
}

function showCategories(){ 
x = document.getElementById("categoryList");
x.classList.toggle("showcategoryList");
}

function myfunction(x){
x.classList.toggle("change");
document.getElementById("myDropdown").classList.toggle("show");
document.getElementById("dropdownMenu").classList.toggle("slide");
}

function addToCart(x){
var btnparent = x.parentNode;
var parent = btnparent.parentNode;
var children= parent.childNodes;
var drugDiscrpt= children[3].innerHTML;
var initprice = children[5].innerHTML;
var finprice = String(initprice);
var price = getrealprice(finprice);

var list = document.createElement("tr");
var item = document.createElement("td");
var priceList= document.createElement("td");
var rates= document.createElement("td");
var amount= document.createElement("td");
var ratenum = document.createElement("div");
var btn = document.createElement("div");
var btnplus = document.createElement("button");
var btnminus = document.createElement("button");

amount.setAttribute("class", "amount");

ratenum.setAttribute("class", "ratenum");
ratenum.setAttribute("id", "ratenum");
btn.setAttribute("class", "btn");
btnplus.setAttribute("class", "plus");
btnplus.setAttribute("onclick","plus(this)");

btnminus.setAttribute("class", "minus");
btnminus.setAttribute("onclick","minus(this)");


var itemVal = document.createTextNode(drugDiscrpt);
var priceVal = document.createTextNode(price);
var rateVal = document.createTextNode("1");
var plusVal = document.createTextNode("\u25B4");
var minusVal = document.createTextNode("\u25BE");
var amountVal = document.createTextNode(price);

var cartTable = document.getElementById("cart_table");

cartTable.appendChild(list);
list.appendChild(item);
item.appendChild(itemVal);
list.appendChild(priceList);
priceList.appendChild(priceVal);
list.appendChild(rates);
rates.appendChild(ratenum);
ratenum.appendChild(rateVal);
rates.appendChild(btn);
btn.appendChild(btnplus);
btnplus.append(plusVal);
btnminus.append(minusVal);
btn.appendChild(btnminus);
list.appendChild(amount);
amount.appendChild(amountVal);



}

function getrealprice(str){
var realPrice= str.substring(1, str.length);
var finalPrice=parseFloat(realPrice);

return finalPrice
}

function plus(a){
var parent1 = a.parentNode;
var parent2 = parent1.parentNode;
var parent3 = parent2.parentNode;

var child = parent3.childNodes;
var rate =child[2].childNodes;
var rrate = rate[0].innerHTML;

var rate2 = parseFloat(rrate);
var finalrate = String(rate2 + 1);
rate[0].innerHTML = finalrate;

var price = child[1].innerHTML;
var p = parseFloat(price);

var amount =child[3].innerHTML;
var amount2 = parseFloat(amount);
var finalamount = String(amount2 +p);
child[3].innerHTML = finalamount;
}

function minus(b){
var parent1 = b.parentNode;
var parent2 = parent1.parentNode;
var parent3 = parent2.parentNode;

var child = parent3.childNodes;
var rate =child[2].childNodes;
var rrate = rate[0].innerHTML;

var rate2 = parseFloat(rrate);
if (rate2-1<0){
rate[0].innerHTML= 0;
}
else{
var finalrate = String(rate2 - 1);
rate[0].innerHTML = finalrate;}

var price = child[1].innerHTML;
var p = parseFloat(price);

var amount =child[3].innerHTML;
var amount2 = parseFloat(amount);

if(amount2-p<0){
child[3].innerHTML = 0;
}else {
var finalamount = String(amount2 -p);
child[3].innerHTML = finalamount;}
}

function showCart(){
document.getElementById("cart").classList.toggle("showcart");
}

