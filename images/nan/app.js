const imgcart = document.querySelector(".img-cart");
const human = document.querySelector(".human");
imgcart.addEventListener("click", () => {
  document.getElementById("empty").style.display = "block";
});
human.addEventListener("click", () => {
  document.getElementById("empty").style.display = "none";
});
let quantity = document.querySelector(".quantity");
const normalprice = document.querySelector(".normal-price");
const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");
const btn = document.querySelector(".btn button");
const lists = document.querySelector(".lists");
let qty=document.querySelector(".qty");
let tquantity=document.querySelector("#quantity")
const dele=document.querySelector(".dele")

let price = 125;
let totalqt = quantity.innerHTML;
let totalprice;


decrement.addEventListener("click", () => {
 if(totalqt==1){
    totalqt=1
 }else{
    totalqt--;
 }
 quantity.innerHTML=totalqt;
 totalprice=price*totalqt;
 normalprice.innerHTML= "$"+totalprice+'.00'
});

increment.addEventListener("click", () => {
  totalqt++;
 quantity.innerHTML=totalqt
 totalprice=price*totalqt;
 normalprice.innerHTML= "$"+totalprice+'.00'

});

btn.addEventListener("click",()=>{
    const newdiv=document.createElement("div");
    newdiv.classList.add("cartt")
    newdiv.innerHTML=`<div class="small-img"><img src="./../image-product-1-thumbnail.jpg"></div>
                <div class="text">
                    <p> Fall Limited Edition Sneakers</p>
                    <div class="price-con">
                        <span>$125.00</span>
                        <span>*</span>
                        <span>${totalqt}</span>
                        <span class="total">$${totalprice}</span>
                    </div>
                </div>
                <button class="dele"><i class="fa-solid fa-delete-left"></i></button>`;
                lists.append(newdiv)
                tquantity.innerHTML=totalqt;

});















