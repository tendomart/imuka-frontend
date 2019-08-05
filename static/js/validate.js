//Function to Validate Toyota form Elements

//Sets Default settings on startup
function start(){
  document.getElementById('id').focus();
  document.getElementById("cust").checked=true;
  document.getElementById('oversize-container').checked=false;
}

function ValidData(){
  //Pick Values entered by User into Form Elements for Validation
  let id=document.getElementById('id');
  let name=document.getElementById('name');
  let state=document.getElementById('state');
  let partNo=document.getElementById('part-number');
  let description=document.getElementById('description');
  let quantity=document.getElementById('quantity');
  let price=document.getElementById('price');

  //
  

  //ensure field is not empty and has no white space characters
  if(id.value==""  || isNaN(id.value)  || name.value.isNaN){
 // alert('Customer ID Field is Either Empty or Value Is Not a Number ');
      id.focus();
      Swal.fire({
        type: 'error',
        title: 'ID Field !!',
        text: 'Customer ID Field is Either Empty or Value Is Not a Number',
      })
  return;
  }
  
  
   //Validate name Field
   if(name.value==""){
      name.focus();
      Swal.fire({
        type: 'error',
        title: 'Name Missing !',
        text: 'Please Enter Customer Name',
      })
      return;
    }
    
  
    if(state.value.length!==3 ){

       state.focus();
       Swal.fire({
        type: 'error',
        title: 'City Code Format !!!',
        text: 'Please Ensure that City Code is 3 Digits  e.g KLA',
      })
       return;
     }
  
     
     //Ensure Part Number is not missing
     if(partNo.value==""){
     //alert('Attention Please Enter a Part Number ');
      partNo.focus();
      Swal.fire({
        type: 'error',
        title: 'Oops...Part Number !!!',
        text: 'You Did not Enter a Part Number',
      })
      
      
  return;
     }
  
     //Ensure description is not missing
     if(description.value==""){
 // alert('Please Enter a Description');
  description.focus();
  Swal.fire({
    type: 'error',
    title: 'Oops... Description !!!',
    text: 'You Did not Enter any Description',
  })
  return;
   }
  
  //Ensure Price is a number Greater than 0
   if(price.value<=0){
    //alert('Price must be greater than 0');
    price.focus();
    Swal.fire({
      type: 'error',
      title: 'Attention Price Issue !!!',
      text: 'Price must be greater than 0',
    })
    return;
     }
  //Ensure Quantity value is above 0
     if(quantity.value<=0){
      //alert('Quantity must be Greater than 0');
      quantity.focus();
      Swal.fire({
        type: 'error',
        title: 'Quantity Issue !!!',
        text: 'Quantity must be Greater than 0',
      })
      return;
       }
       
       //exit function 
       return true;
  }

  //COST : computes purchases
  function calcCost(){
    let price = document.getElementById('price').value;
    let quantity=document.getElementById('quantity').value;
    let cst = (price*quantity);
    
     return cst.toFixed(2);
  }
 
       //SALES TAX :computes sales taxes
  function salesTax(){
    let cost = calcCost();
    let validate = ValidData();
    let town=document.getElementById('state').value.toUpperCase();
    let towncode= ["KLA","EBB","MBR"];
  let customerType=document.getElementById("cust").checked;
  if(validate==true){
    if(town==towncode[0] && customerType==true){
     
      return (cost*(10/100)).toFixed(2);
    }
    else if(town==towncode[0] && customerType==false){
      return (cost*0).toFixed(2);
    }
    if((town==towncode[1] || town==towncode[2]) && customerType==true ){
    
      return (cost*(5/100)).toFixed(2);
    }
    else if((town==towncode[1] || town==towncode[2]) && customerType==false){
      return (cost*0).toFixed(2);
    }
    if((town!=towncode[0] || town!=towncode[1] || town!=towncode[2])  && customerType==true){
     
      return (cost*0).toFixed(2);
    }
    else if((town!=towncode[0] || town!=towncode[1] || town!=towncode[2])  && customerType==false){
      return (cost*0).toFixed(2);
    }
    else 
    return ;
  }
      
    }

    //This Computes Shipping and Handling Cost
    function ShippingHandling(){
     
      var charge=0;
    let shippingCharge = [7.00,8.50,9.25,12.00];
    let ups= document.getElementById('ups').checked;
    let fedexg=document.getElementById('fedexg').checked;
    let usportal=document.getElementById('usportal').checked;
    let fedexa=document.getElementById('fedexa').checked;
    let oversizeContainer = document.getElementById('oversize-container').checked;
    let extraHandlingCharge=5.00;
    let shippingTotal=0;
  
   if(fedexg==true && oversizeContainer==false){
      charge=shippingCharge[2];
        return charge;
   }
   else if(fedexg==true && oversizeContainer==true){
    charge=shippingCharge[2];
     shippingTotal=charge+extraHandlingCharge;
     return (shippingTotal.toFixed(2));
   }

   if(fedexa==true && oversizeContainer==false){
    charge=shippingCharge[3];
    return shippingCharge[3].toFixed(2);
   }
   else if(fedexa==true && oversizeContainer==true){
    charge=shippingCharge[3];
    shippingTotal=charge+extraHandlingCharge;
    return (shippingTotal.toFixed(2));
  }
   if(usportal==true && oversizeContainer==false){
    charge=shippingCharge[1];
    return shippingCharge[1].toFixed(2) ;
   }
   else if(usportal==true && oversizeContainer==true){
    charge=shippingCharge[1];
    shippingTotal=charge+extraHandlingCharge;
     return (shippingTotal.toFixed(2));
  }

  if(ups==true && oversizeContainer==false){
    charge=shippingCharge[0];
    return shippingCharge[0].toFixed(2);
   }
   else if(ups==true && oversizeContainer==true){
    charge=shippingCharge[0];
    shippingTotal=charge+extraHandlingCharge;
    return (shippingTotal.toFixed(2));
  }
  
  }


  //CLEAR: this function maintains only one shipping option selected
  
function select(radio){
  let handling = parseInt(radio);
  let shippingCharge = [7.00,8.50,9.25,12.00];
  var charge;
  
  alert('You Selected Fedex Air and The Charge is  '+handling);

if(handling==4){
  charge=shippingCharge[3];
  alert('You Selected Fedex Air and The Charge is  '+charge);

}
if(handling==2){
  
  charge = shippingCharge[2];
  alert('You Selected Fedex Ground and The Charge is  '+charge);
}
if(handling===3){
  charge=shippingCharge[1];
  alert('You Selected US Air Portal and The Charge is  '+charge);
 
}
else if(handling==1){
  charge = shippingCharge[0];
  alert('You Selected UPS and The Charge is  '+charge);
}
else 
return;
}
  
  
    //This computes Total Cost
    function totalCost(){
      let cost= parseFloat(calcCost()); 
      let tax = parseFloat(salesTax());
      let shipping=parseFloat(ShippingHandling());
         let total = cost + tax + shipping;
         return total.toFixed(2);
    }
  
  //displays Purchase results to Display Panel
  function display(){

    document.getElementById('cost').value="$ "+calcCost();
    document.getElementById('tax').value="$ "+salesTax();
    document.getElementById('shipping').value="$ "+ShippingHandling()
    document.getElementById('total').value="$ "+totalCost();


    return;
  }

  //This is called by The Compute Button 
  function compute(){
  if(ValidData()===true){
    salesTax();
    ShippingHandling();
    display();

    quantity.focus();
    Swal.fire({
      type: 'message',
      title: 'Successful',
      text: 'Data Saved Successfully !',
    })
  }
  else 
       return ;
  }
  //Reset Radio Buttons and Checkboxes Back to defaults and Text Boxes
  function resetRadioButtons(){
document.getElementById('ups').checked=true;
document.getElementById('fedexg').checked=false;
document.getElementById('usportal').checked=false;
document.getElementById('fedexa').checked=false;
document.getElementById("cust").checked=true;
document.getElementById("oversize-container").checked=false;

document.getElementById('id').value='';
  document.getElementById('name').value='';
  document.getElementById('state').value='';
  document.getElementById('part-number').value='';
  document.getElementById('description').value='';
  document.getElementById('price').value='';
  document.getElementById('quantity').value='';
  document.getElementById('cost').value='';
  document.getElementById('tax').value='';
  document.getElementById('shipping').value='';
  document.getElementById('total').value='';
return;
  }


  // Resets all elements to default for a New Order
  function newOrder(){
   // clear();
    resetRadioButtons();
     document.getElementById('id').focus();
     return;
  }

  //toggles Password Visibility
  function togglePassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 
  //Window Close Function
  // var myWindow;
  // let option=false;
  
  function closeWin() {
    var myWindow;
    let option=false;
    var retVal = confirm("Do you want to Close Program ?");
    if( retVal == true ) {
     alert(''+retVal)
     // myWindow.close();
      top.close()
      // document.write ("User wants to continue!");
       return true;
    }
    else {
      // document.write ("User does not want to continue!");
       return false;
    }
  }


  function windowClose() {
    window.open('','_parent','');
    window.close();
    }

  

  //Toggle Radio Buttons simultaneously using JQuery
  $(document).ready(function() {
    $("input[type=radio]").click(function() {
      // Get the storedValue
      var previousValue = $(this).data('storedValue');
      // if previousValue = true then
      //     Step 1: toggle radio button check mark.
      //     Step 2: save data-StoredValue as false to indicate radio button is unchecked.
      if (previousValue) {
        $(this).prop('checked', !previousValue);
        $(this).data('storedValue', !previousValue);
      }
      // If previousValue is other than true
      //    Step 1: save data-StoredValue as true to for currently checked radio button.
      //    Step 2: save data-StoredValue as false for all non-checked radio buttons. 
      else{
        $(this).data('storedValue', true);
        $("input[type=radio]:not(:checked)").data("storedValue", false);
      }
    });
  });

  