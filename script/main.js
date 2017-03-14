



function main() {

    //set up reference to our form, since 
    var form = document.getElementById("productForm");
    form.addEventListener("change",formChanged); /* change listens to change event then formChange activated when form changes */
    
   
 
    
}

/**
  onChange callback function
**/
function formChanged(event) {
    
    var form = document.getElementById("productForm");   
    
    var subTotal = 0;
    var shipping = 0;
    var taxes = 0;
    var total = 0;
    var choices = "";

for (var=i; i < form.extras.length;i++)
    
    if (form.extras[i].checked) {
        
        numberProduct = preseInt(form.product[1].dataset.price);
        subTotal = subTotal + numberTotal;
        
        choices=choices + "<p>" + form.extra[i].dataset.data.disc + "</p>"
        
        
        
    } /* end of if */

}


