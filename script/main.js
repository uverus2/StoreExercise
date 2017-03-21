



function main() {

    //set up reference to our form, since 
    var form = document.getElementById("productForm");
    
    form.addEventListener("change",formChanged); /* change listens to change event then formChange activated when form changes */
    form.blender.addEventListener("blur",validateName) /* event blur listens to leaving the form situation then validate name is activated when form is left */
    
    
    
   
 
    
}


function validate(name) {
    
    var form = document.getElementById("productForm") // sets a reference to the form cuz product for is the id of the form 
    
    if (form.name.value =  ){
        
        productForm.name.style.backgroundColor="red"
        return false;   
    }
    
    else {
        
        productForm.product.style.backgroundColor="";
        return true;
    }
        
    
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
    
     console.log("the form has changed");

for (var i=0; i < form.product.length;i++) {
    
    if (form.product[i].checked) {
        
    var numberTotal =  parseInt(form.product[i].dataset.price);
          
    subTotal = subTotal + numberTotal; 
    
     // choices=choices + "<p>" + form.extra[i].dataset.data.disc + "</p>"
        
     
     
          
     
     
    } /* end of if */
    } /* end of loop */
    
    if (subTotal<100){
        
        shipping=10
    }/* end of if */
    
    taxes = 0.2*subTotal; 
    total = subTotal+taxes+shipping;
    
document.getElementById("sub-total").innerHTML =  "£" + subTotal;
document.getElementById("shipping").innerHTML =  "£" + shipping;
document.getElementById("taxes").innerHTML =  "£" + taxes;
document.getElementById("total").innerHTML = "£" + total;
    

}


