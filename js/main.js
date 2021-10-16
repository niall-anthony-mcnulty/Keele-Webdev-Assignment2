
$(document).ready(function(){ 

    const apiKey = 'ca3c995a6eebe56bd7a6d2e8dfbf1f55';


    /*  Prevent form submit and capturing the value

        https://www.w3schools.com/jquery/event_preventdefault.asp
        https://www.geeksforgeeks.org/jquery-queryselector-vs-queryselectorall-methods/ */


        
    const formDetails = document.querySelector("form.form-search");
    const inputDetails = document.querySelector("input.input-country");

    formDetails.addEventListener("submit", e => {
        e.preventDefault();
        let inputVal = inputDetails.value;
        $('span.searcherror').html('');
        console.log(inputVal);

        if (inputVal.length == 0) {
            let errorMessage = $('span.searcherror').html('Please input a location');
            console.log(errorMessage);
            form.reset();
            input.focus();
            return errorMessage;
            
            
        }
        
        else if ((inputVal.split(",").length === 1) && (inputVal.length > 1)) {
            
            let cityName = inputVal.toLowerCase();
            $('span.searcherror').html('');
            console.log(cityName);
            form.reset();
            input.focus();
            return cityName.toLowerCase();
            
            }
        else if ((inputVal.split(",").length === 2) && (inputVal.split(",")[1].length === 2)) {


            const contentList = [];
            let cityName = (inputVal.split(",")[0]).toLowerCase();
            let countryCode = (inputVal.split(",")[1]).toLowerCase(0);
            $('span.searcherror').html('');
            contentList.push(cityName, countryCode);
            console.log(contentList);
            form.reset();
            input.focus();
            return contentList;
         
        }
        else {
            
            let errorMessage = $('span.searcherror').html( 'Ensure the country code is 2 character in length and seperated from the city location by a comma.');
            console.log(errorMessage);
            form.reset();
            input.focus();
            return errorMessage;
           
    
        
        }
        
    });

})

