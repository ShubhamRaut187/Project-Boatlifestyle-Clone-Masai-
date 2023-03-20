var cartData = JSON.parse(localStorage.getItem("cart_list"))||[];
  document.getElementById("bcode").addEventListener("click",paymentPage);
  var total =0;
displayCart();
function displayCart(){
    document.querySelector("#container").textContent="";
    var titems = document.querySelector("#items")
    titems.textContent = cartData.length;

 total = cartData.reduce(function(acc,elem){
    return acc + Number(elem.Price);
},0)
document.querySelector("#cartTotal").textContent = total;
cartData.map(function(elem,index){
        
          var div = document.createElement("div")
          div.setAttribute("class","main");
          
          var div1 = document.createElement("div")
          div1.setAttribute("class","childs1");
          

          var div2 = document.createElement("div")
          div2.setAttribute("class","childs2");
          var image = document.createElement("img")
          image.setAttribute("src",elem.Image)
          div1.append(image)
           
          var prices = document.createElement("div")
          prices.setAttribute("class","pricedetails")

          var realprice = document.createElement("h3")
          realprice.textContent = "₹" +elem.Price;

          var discount = document.createElement("h3")
           discount.setAttribute("class","off")
          discount.textContent = elem. Percent_off;
          
          var mrp = document.createElement("h3")
          mrp.textContent ="₹"+ elem.MRP;
          mrp.setAttribute("class","striked")
          
          var reviews = document.createElement("div")
          reviews.setAttribute("class","reviewdetails")

          reviews.textContent = elem.Name 
          // +" Ratings " + elem.Rating
         
          var remove = document.createElement("div")
          remove.setAttribute("class","button")
          var btnimage = document.createElement("img")
          btnimage.setAttribute("src","https://cdn-icons-png.flaticon.com/512/70/70022.png")
          var btn = document.createElement("button")
         
          btn.textContent = "Remove"
          remove.addEventListener("click",function(){
             dlt(elem,index)
          })
           remove.append(btn,btnimage)
          prices.append(realprice,discount,mrp)
          div2.append(prices,reviews,remove)
          div.append(div1,div2)

        // var icon = document.createElement("img")
        // icon.setAttribute("src","https://cdn-icons-png.flaticon.com/512/70/70022.png")
        // // icon.setAttribute("style","height:50px")
        // icon.addEventListener("click",function(){
        //   dlt(elem,index);
        //  });
        // btn.append(icon)
        
        

        
        document.querySelector("#container").append(div);
        
    })
}

  function dlt(elem,idx){
    cartData.splice(idx,1);
    localStorage.setItem("cart_list",JSON.stringify(cartData))
    // alert("ram")
    displayCart();
  }
  function discount(){
    var pcode = document.getElementById("pcode").value 
    if(pcode=="masai30"){
      var dtotal = total*70/100;
        document.querySelector("#cartTotal").textContent = dtotal;
        
    }else{
    alert("Invalid Promo Code")
    }
    // displayCart();
   

  }

  function paymentPage(){
    window.open("payment.html")
  }

  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


  document.querySelector("#boathome").addEventListener("click",home)
function home(){
  window.open("home11.html")
}
