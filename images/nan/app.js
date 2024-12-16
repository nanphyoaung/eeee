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
let qty = document.querySelector(".qty");
let tquantity = document.querySelector("#quantity");
const dele = document.querySelector(".dele");
const your=document.querySelector(".your");

let price = 125;
let totalqt = quantity.innerHTML;
let totalprice;

decrement.addEventListener("click", () => {
  if (totalqt == 0) {
    totalqt = 0;
  } else {
    totalqt--;
  }
  quantity.innerHTML = totalqt;
  totalprice = price * totalqt;
  normalprice.innerHTML = "$" + totalprice + ".00";
});

increment.addEventListener("click", () => {
  totalqt++;
  quantity.innerHTML = totalqt;
  totalprice = price * totalqt;
  normalprice.innerHTML = "$" + totalprice + ".00";
});

btn.addEventListener("click", () => {
  if(totalqt != 0 ){
    const newdiv = document.createElement("div");
    newdiv.classList.add("cartt");
    lists.innerHTML="";
    newdiv.innerHTML = `<div class="small-img"><img src="./../image-product-1-thumbnail.jpg"></div>
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
    lists.append(newdiv);
    tquantity.innerHTML = totalqt;
    document.querySelector(".your").style.display="none";
    document.querySelector(".check").style.display="block";
    document.querySelector(".dele").addEventListener("click", () => {
      newdiv.innerHTML="";
    document.querySelector(".your").style.display="block";
    document.querySelector(".check").style.display="none";

    });
  }
});
const image=document.querySelector(".image img");
const imgs=document.querySelectorAll(".img img");
imgs.forEach((img,key)=>{
  key++;
  img.addEventListener("click",()=>{
    image.src=`./../image-product-${key}.jpg`;
    imgs.forEach((img)=>{
      img.classList.remove("active")
    })
    img.classList.add("active");
  })
})
const model=document.querySelector(".model");
const icon=document.querySelector(".icon");
image.addEventListener("click",()=>{
  document.querySelector(".model").style.display="block";
})

icon.addEventListener("click",()=>{
  document.querySelector(".model").style.display="none";
})

const imagemodel=document.querySelector(".image-model img");
const smallimgs=document.querySelectorAll(".small-img img");
const check=document.querySelector(".check")
smallimgs.forEach((img,key)=>{
  key++;
  img.addEventListener("click",()=>{
    imagemodel.src=`./../image-product-${key}.jpg`;
    smallimgs.forEach((img)=>{
      img.classList.remove("active")
    })
    img.classList.add("active");
  })
})
check.addEventListener("click",()=>{
  alert("Thank you so much")
})


