
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

        if (inputVal.length == 0) {
            $('span.searcherror').html('Please input a location');
            inputVal = null;
            console.log(inputVal);
            $('form').trigger('reset');
            $('#input-country').focus();
        }
        
        else if ((inputVal.split(",").length === 1) && (inputVal.length > 0)) {
            inputVal = (inputVal).toLowerCase();
            console.log(inputVal);
            $('span.searcherror').html('');
            $('form').trigger('reset');
            $('#input-country').focus();

            url =  "https://api.openweathermap.org/data/2.5/weather?q="+inputVal+"&appid="+apiKey+"&lang=en&units=metric";
            $.ajax({
                url: url,
                type: "POST",
                dataType: 'json'
            }).done( function(response) {
                const {main, name, sys, weather, dt, cod} = response;
                const icon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg';

                addData();

                function addData() {

                    
                    weatherMain = capitalizeFirstLetter(weather[0].main);
                    weatherIcon = weather[0].icon;
                    weatherIconURL =  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
                    weatherTemp = (Math.round(main.temp) + " C");
                    weatherCity = capitalizeFirstLetter(name);
                    weatherCountry = (sys.country).toUpperCase();
                    weatherTime = dt;
                    apiStatus = cod;

                    console.log(response);
                    console.log(cod);
                    console.log(weatherTime);

                    
                    $('.location').html("<li class='weather-city'>" + weatherCity + ", " + weatherCountry + "</li><li><img src="+ weatherIconURL +"></li><li>" + weatherMain + "</li><li>" + weatherTemp + "</li>");
                    
                }

                function capitalizeFirstLetter(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                
                }

    
            }).fail( function(jqXHR, exception) {
                msg = '';
                if (jqXHR.status === 0) {
                    msg = "Network connection issue" + "<br>" + "[" + jqXHR.status + "]";
                } else if (jqXHR.status == 404) {
                    msg = "Check your country code and spelling are correct. No results found." + "<br>" + "[" +jqXHR.status + "]"; 
                } else if (jqXHR.status == 500) {
                    msg = "Server Error. Try again later." + "<br>" + "[" + jqXHR.status + "]";
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                $('.location').html("<li class='errors'>" + msg + "</li>");
                 
            });
                
        }

        else if ((inputVal.split(',').length == 2) && (((inputVal.split(",")[1]).replace(/ /g,'')).length == 2)) {

            contentList = [];
            cityName = (inputVal.split(",")[0]).toLowerCase();
            countryCode = ((inputVal.split(",")[1]).toLowerCase().replace(/ /g,''));
            contentList.push(cityName, countryCode);
            inputVal = contentList;
            console.log(inputVal);
            $('span.searcherror').html('');
            $('form').trigger('reset');
            $('#input-country').focus();
         
        }
        
        else {
            
            $('span.searcherror').html( 'Ensure the country code is 2 characters in length and seperated from the city location by a comma.');
            inputVal = null;
            console.log(inputVal);
            $('form').trigger('reset');
            $('#input-country').focus();
        }
        
    });


})

