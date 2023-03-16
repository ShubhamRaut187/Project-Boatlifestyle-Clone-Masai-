let productArray=JSON.parse(localStorage.getItem("productArrayData"))|| []
upload(productArray);
function upload(productArray){
   let obj={
   Image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    Name:"Wave Select: SmartWatch",
    Price:2099,
    MRP:6900,
    Percent_off:"80% off",
    Rating:4.6,
    Discount:"15 Extra Discount",
    Discription:"1.69(4.29 cm) Colour HD Display, 20+ Active Sport Modes,Heart Rate & Sp02 Monitor,10 Day Battery Life",
    Category:"Smart Watch",
    Status:"In-Stock",   
       }

       productArray.push(obj);

       // localStorage.setItem("productArrayData",JSON.stringify(productArray));
       show(productArray)
}
     
         
       
         function show(productArray){

           productArray.map(function(elem,ind){
               let div=document.createElement("div");
           let imgDiv=document.createElement("div");
           let img=document.createElement("img");
           img.setAttribute("src",elem.Image);
           let divDetails=document.createElement("div");
           let nameH2=document.createElement("h2")
           nameH2.textContent=elem.Name;
           let priceDiv=document.createElement("div");
           let price=document.createElement("p");
           price.setAttribute("class","price")
           price.textContent=elem.Price;
           let Mrp=document.createElement("p");
           Mrp.textContent=elem.MRP;
           let gift=document.createElement("p");
           gift.textContent=elem.Percent_off;
           let discount=document.createElement("p");
           discount.textContent=elem.Discount;
           let desc=document.createElement("p");
           desc.textContent=elem.Discription;
           let h3=document.createElement("h3");
           h3.textContent=elem.Category;
           let status=document.createElement("h4");
           status.textContent=elem.Status;
           let  bDiv=document.createElement("div");
           bDiv.setAttribute("class","bDiv")
           let cart=document.createElement("button");
           cart.textContent="Add to cart";
           cart.addEventListener("click",function(){
             addToCart(elem,ind);
           })
           let buy=document.createElement("button");
           buy.textContent="Buy";
           buy.setAttribute("id","by");

             bDiv.append(cart,buy);
             
           priceDiv.append(price,Mrp,gift,discount,desc, h3,status);
       divDetails.append(nameH2);
       imgDiv.append(img);
       div.append(imgDiv,divDetails,priceDiv,bDiv);

       document.querySelector(".textBox").append(div);
      
           })

         }
          

       function choose(smallphoto){
           let picSelect=document.getElementById("imagebox");
           picSelect.src=smallphoto.src;
       }
var pD=JSON.parse(localStorage.getItem("details"))||[]
       function addToCart(elem,ind){
           pD.push(elem);
           localStorage.setItem("details",JSON.stringify(pD));
       }
       function choose(smallphoto){
           let picSelect=document.getElementById("imagebox");
           picSelect.src=smallphoto.src;
       }