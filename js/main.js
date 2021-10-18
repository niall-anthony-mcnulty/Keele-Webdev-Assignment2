
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
        
        /* reset form and pass error message if no input */
        if (inputVal.length == 0) {
            $('span.searcherror').html('Please input a location');
            inputVal = null;
            $('form').trigger('reset');
            $('#input-country').focus();
            }
        /* if only one string was entered, check API for city name only */
        else if ((inputVal.split(",").length === 1) && (inputVal.length > 0)) {
            inputVal = (inputVal).toLowerCase();
            $('span.searcherror').html('');
            $('form').trigger('reset');
            $('#input-country').focus();
            
            /* call API */
            url =  "https://api.openweathermap.org/data/2.5/weather?q="+inputVal+"&appid="+apiKey+"&lang=en&units=metric";
            $.ajax({
                url: url,
                type: "POST",
                dataType: 'json',
                }).done( function(response) {
                    const {main, name, sys, weather, dt, cod} = response;
                    const icon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg';

                    addData();
                    /* create a list to pass data into for display */
                    function addData() {

                        weatherMain = capitalizeFirstLetter(weather[0].main);
                        weatherIcon = weather[0].icon;
                        weatherIconURL =  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
                        weatherTemp = (Math.round(main.temp) + " C");
                        weatherCity = capitalizeFirstLetter(name);
                        weatherCountry = (sys.country).toUpperCase();
                        weatherTime = dt;
                        optionsDate = {minute: '2-digit', hour: '2-digit', weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'GMT', timeZoneName: 'short'}
                        weatherDate = new Date(dt*1000).toLocaleDateString("en-GB", optionsDate);
                        
                            
                        $('.location').html("<li class='weather-city'>" + weatherCity + ", " + weatherCountry + "</li><li class='country-time'>" + weatherDate + "</li><li class='weather-icon-url'><img class='weather-pics' src="+ weatherIconURL +"></li><li class='weather-main'>" + weatherMain + "</li><li class='weather-temp'>" + weatherTemp + "</li>");

                        // save to php function // 
                        var values = {'weather':weather[0].main,'icon':"http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png",'temp':(Math.round(main.temp) + " C"), 'date':new Date(dt*1000).toLocaleDateString("en-GB", optionsDate)};
                        console.log(values);         
                       
                        if(values!='') {
                            url = './index.php';
                            $.ajax({
                                data: values,
                                url: url,
                                type: "POST",
                                dataType: "json"
                            }).done( function(response) {
                                alert("Success");
                            });
                            }else{
                                alert("You need to fill in all details");
                                }   
                            }
                            
                            
                    /* function to capitalize first letter of first string */
                    function capitalizeFirstLetter(string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                        }
                    /* function to change background image depending on weather and screen size */
                    /* ref - https://pixabay.com/photos/ */
                
                    var x = window.matchMedia("(max-width: 600px)");
                    weatherPic(x);
            
                    function weatherPic(x) {
                        if (weatherMain == 'Clouds') {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/cloudy-mobile.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/cloudy-desktop.jpg" + ")");   
                            }
                        }
                        else if (weatherMain == 'Thunderstorms') {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/thunderstorm-mobile.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/thunderstorm-desktop.jpg" + ")");   
                            }
                        }
                        else if (weatherMain == 'Drizzle') {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/drizzle-mobile.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/drizzle-desktop.jpg" + ")");   
                            }
                        }
                        else if (weatherMain == 'Rain') {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/rain-mobile.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/rain-desktop.jpg" + ")");   
                            }
                        }
                        else if (weatherMain == 'Snow') {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/snow-mobile.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/snow-desktop.jpg" + ")");   
                            }
                        }
                        else if (weatherMain == ('Mist') || weatherMain == ('Smoke') || weatherMain == ('Haze') || weatherMain == ('Dust') || weatherMain == ('Fog') || weatherMain == ('Sand') || weatherMain == ('Ash') || weatherMain == ('Squall')) {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/atmosphere-mobile.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/atmosphere-desktop.jpg" + ")");   
                            }
                        }
                        else if (weatherMain == 'Tornado') {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/tornado-mobile.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/tornado-desktop.jpg" + ")");   
                            }
                        }
                        else if (weatherMain == 'Clear') {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/clear-mobile.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/clear-desktop.jpg" + ")");   
                            }
                        }
                        else {
                            if (x.matches) {
                                $('body').css("background-image", "url(" + "images/mobilemain.jpg" + ")");
                                }
                            else {
                                $('body').css("background-image", "url(" + "images/mainpic.jpg" + ")");   
                                }
                        }
                        x.addListener(weatherPic)

                    };

                   

                  
                /* error handling */
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
            $('span.searcherror').html('');
            $('form').trigger('reset');
            $('#input-country').focus();

             /* call API */
             url =  "https://api.openweathermap.org/data/2.5/weather?q="+inputVal+"&appid="+apiKey+"&lang=en&units=metric";
             $.ajax({
                 url: url,
                 type: "POST",
                 dataType: 'json'
                }).done( function(response) {
                 const {main, name, sys, weather, dt, cod} = response;
                 const icon = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg';
 

                 /* send via post */
                 addData();
                 /* create a list to pass data into for display */
                 function addData() {
 
                     
                     weatherMain = capitalizeFirstLetter(weather[0].main);
                     weatherIcon = weather[0].icon;
                     weatherIconURL =  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
                     weatherTemp = (Math.round(main.temp) + " C");
                     weatherCity = capitalizeFirstLetter(name);
                     weatherCountry = (sys.country).toUpperCase();
                     weatherTime = dt;
                     optionsDate = {minute: '2-digit', hour: '2-digit', weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'GMT', timeZoneName: 'short'}
                     weatherDate = new Date(dt*1000).toLocaleDateString("en-GB", optionsDate);
                     
                     
                     
                     $('.location').html("<li class='weather-city'>" + weatherCity + ", " + weatherCountry + "</li><li class='country-time'>" + weatherDate + "</li><li><img class='weather-pics' src="+ weatherIconURL +"></li><li>" + weatherMain + "</li><li>" + weatherTemp + "</li>");
                     
                };
                 /* function to capitalize first letter of first string */
                 function capitalizeFirstLetter(string) {
                     return string.charAt(0).toUpperCase() + string.slice(1);
                 }   
                 
                 /* function to change background image depending on weather and screen size */
                 /* ref - https://pixabay.com/photos/ */
                 var x = window.matchMedia("(max-width: 600px)");
                 weatherPic(x);
                 
 
                 function weatherPic(x) {
                     if (weatherMain == 'Clouds') {
                         if (x.matches) {
                             $('body').css("background-image", "url(" + "images/cloudy-mobile.jpg" + ")");
                             }
                         else {
                             $('body').css("background-image", "url(" + "images/cloudy-desktop.jpg" + ")");   
                         }
                     }

                     else if (weatherMain == 'Thunderstorms') {
                        if (x.matches) {
                            $('body').css("background-image", "url(" + "images/thunderstorm-mobile.jpg" + ")");
                            }
                        else {
                            $('body').css("background-image", "url(" + "images/thunderstorm-desktop.jpg" + ")");   
                        }
                    }
                    else if (weatherMain == 'Drizzle') {
                        if (x.matches) {
                            $('body').css("background-image", "url(" + "images/drizzle-mobile.jpg" + ")");
                            }
                        else {
                            $('body').css("background-image", "url(" + "images/drizzle-desktop.jpg" + ")");   
                        }
                    }
                    else if (weatherMain == 'Rain') {
                        if (x.matches) {
                            $('body').css("background-image", "url(" + "images/rain-mobile.jpg" + ")");
                            }
                        else {
                            $('body').css("background-image", "url(" + "images/rain-desktop.jpg" + ")");   
                        }
                    }
                    else if (weatherMain == 'Snow') {
                        if (x.matches) {
                            $('body').css("background-image", "url(" + "images/snow-mobile.jpg" + ")");
                            }
                        else {
                            $('body').css("background-image", "url(" + "images/snow-desktop.jpg" + ")");   
                        }
                    }
                    else if (weatherMain == ('Mist') || weatherMain == ('Smoke') || weatherMain == ('Haze') || weatherMain == ('Dust') || weatherMain == ('Fog') || weatherMain == ('Sand') || weatherMain == ('Ash') || weatherMain == ('Squall')) {
                        if (x.matches) {
                            $('body').css("background-image", "url(" + "images/atmosphere-mobile.jpg" + ")");
                            }
                        else {
                            $('body').css("background-image", "url(" + "images/atmosphere-desktop.jpg" + ")");   
                        }
                    }
                    else if (weatherMain == 'Tornado') {
                        if (x.matches) {
                            $('body').css("background-image", "url(" + "images/tornado-mobile.jpg" + ")");
                            }
                        else {
                            $('body').css("background-image", "url(" + "images/tornado-desktop.jpg" + ")");   
                        }
                    }
                    else if (weatherMain == 'Clear') {
                        if (x.matches) {
                            $('body').css("background-image", "url(" + "images/clear-mobile.jpg" + ")");
                            }
                        else {
                            $('body').css("background-image", "url(" + "images/clear-desktop.jpg" + ")");   
                        }
                    }
                    else {
                        if (x.matches) {
                            $('body').css("background-image", "url(" + "images/mobilemain.jpg" + ")");
                            }
                        else {
                            $('body').css("background-image", "url(" + "images/mainpic.jpg" + ")");   
                        }

                    }
                    
                     x.addListener(weatherPic)
                }
             /* error handling */
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
        /* error handling */
        else {
            
            $('span.searcherror').html( 'Ensure the country code is 2 characters in length and seperated from the city location by a comma.');
            inputVal = null;
            $('form').trigger('reset');
            $('#input-country').focus();
        }
        
    });


})

