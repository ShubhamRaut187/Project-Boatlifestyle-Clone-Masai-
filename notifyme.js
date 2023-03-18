var notifyproduct1 = JSON.parse(localStorage.getItem("notify_list")) || [];
displaynotifyproduct();
function displaynotifyproduct(){
    notifyproduct1.map(function(elem,index){
        var div = document.createElement("div");
        div.setAttribute("class","child");

        var div1=document.createElement("div");
        div1.setAttribute("class","image");

        var image = document.createElement("img");
        image.setAttribute("src",elem.Image);
        image.setAttribute("alt",elem.Name);

        div1.append(image);

        var div2 = document.createElement("div");
        div2.setAttribute("class","details");

        var anch1 = document.createElement("a");
        anch1.setAttribute("href","hello.html");
        anch1.setAttribute("class","product_name");
        anch1.textContent = elem.Name;
        anch1.addEventListener("click",function(){
            details(elem);
        });

        var div3 = document.createElement("div");
        div3.setAttribute("class","price_details")

        var h42 = document.createElement("h4");
        h42.setAttribute("class","price");
        h42.textContent = elem.Price;

        var h43 = document.createElement("h4");
        h43.setAttribute("class","percentoff");
        h43.textContent = elem.Percent_off;

        var h44 = document.createElement("h4");
        h44.textContent = elem.MRP;
        
        div3.append(h42,h43,h44);

        var div4 = document.createElement("div");
        div4.setAttribute("class","reviews");

        var p1 = document.createElement("p");
        p1.setAttribute("class","product_rating");
        p1.textContent = elem.Rating;

        div4.append(p1);

        var p2 = document.createElement("p");
        p2.textContent = elem.Discount;

        div2.append(anch1,div3,div4,p2);
        div.append(div1,div2);
        document.querySelector("#parent").append(div);
})

}
document.querySelector("form").addEventListener("submit",thanksmsg);
function thanksmsg(){
    event.preventDefault();
    var thanks = document.getElementById("thankyou");
    thanks.textContent = "Thank You!"

    var message = document.getElementById("message");
    message.textContent = "We Will Notify You Once The Product Is Back "

    var emailbox = document.getElementById("cust_email");
    emailbox.value="";
}
document.querySelector(".backbtn").addEventListener("click",backtoproducts);
function backtoproducts(){
    notifyproduct1.splice(0,1);
    localStorage.setItem("notify_list",JSON.stringify(notifyproduct1));
}