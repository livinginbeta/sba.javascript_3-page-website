document.getElementById("contactForm").addEventListener("submit", myFunction);

function myFunction() {
    var cForm=document.getElementById("contactForm");
    var nameArray = new Array();
    var counter = 0;
    for (var i=0;i<cForm.length;i++) {
        if (cForm.elements[i].name =='fname' || cForm.elements[i].name=='lname') { 
            nameArray[counter] = cForm.elements[i].value;
            counter++;            
            if (counter == 2) {
                alert("Thank you, " + nameArray[0] + " " + nameArray[1] + ", your form has is about to be submitted. If requested, we will respond to you within 48 hours.");
            }
        }       
    }
}