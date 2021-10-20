
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
                cache: false,
                })
                .done (function(response1) {
                    const {main, name, sys, weather, dt, cod} = response1;
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
                        optionsDate = {minute: '2-digit', hour: '2-digit', weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'GMT', timeZoneName: 'short'};
                        weatherDate = new Date(dt*1000).toLocaleDateString("en-GB", optionsDate);
    
                        $('.location').html(`<li class='weather-city'>${weatherCity}, ${weatherCountry}</li><li class='country-time'>${weatherDate}</li><li class='weather-icon-url'><img class='weather-pics' src=${weatherIconURL}></li><li class='weather-main'>${weatherMain}</li><li class='weather-temp'>${weatherTemp}</li>`);

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
                                };
                            };
                        x.addListener(weatherPic)

                        function generateDataForPhp() {
                            return {main: weatherMain, 
                                     cityName : weatherCity, 
                                     weatherIcon: weatherIconURL, 
                                     temp : weatherTemp,
                                     date : weatherDate};
                          }

                          var data_for_php = generateDataForPhp();
                        
                        // second ajax call to php file //
                        $.ajax({
                            type: 'POST',
                            url: './addweather.php',
                            dataType: "json",
                            data: data_for_php
                        }).done((response2) => {
                                console.log(response2);
                            })

                            // error handling
                            .fail (function(jqXHR, exception) {
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
                           
                            console.log("AJAX to PHP server failed");
                            console.log(msg);
                            
                            })

                             // third ajax call to - php file - get data //
                        $.ajax({
                            type: 'POST',
                            url: './getweather.php',
                            data: {cityName : weatherCity},
                            dataType: "json"
                        }).done((response3) => {
                                console.log(response3)
                                if (response3.length > 1) {
                                // check for past data if records show //
                                for(let i = 1; i < response3.length; i++) {
                                    var obj = response3[i]
                                    // create lists from response obj
                                    if (i===1) {
                                    $('.header-history').html("<h4 class='weather'>Past Weather</h4>");
                                    $('.city-history').html("<tr><td class='historydescription'>" + obj[0] + "</td></tr><tr><td class='historytime'>" +obj[1]+ "</td></tr><tr><td class='historyicon'><img src=" +obj[2]+"></td></tr>")
                                                }
                                    else if (i < 3) {
                                        $('.city-history').append("<tr><td class='historydescription'>" + obj[0] + "</td></tr><tr><td class='historytime'>" +obj[1]+ "</td></tr><tr><td class='historyicon'><img src=" +obj[2]+"></td></tr>") 
                                        }
                                    }
                                }
                                else {
                                    $('.city-history').empty();
                                    $('.weather').empty();
                                    }
                                
                                
                            })

                            // error handling
                            .fail (function(jqXHR, exception) {
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
                           
                            console.log("AJAX to PHP server failed");
                            console.log(msg);
                            
                            }); 
                    
                    };

                /* error handling */
                })
                .fail (function(jqXHR, exception) {
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
                dataType: 'json',
                cache: false,
                })
                .done (function(response1) {
                    const {main, name, sys, weather, dt, cod} = response1;
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
                        optionsDate = {minute: '2-digit', hour: '2-digit', weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'GMT', timeZoneName: 'short'};
                        weatherDate = new Date(dt*1000).toLocaleDateString("en-GB", optionsDate);
    
                        $('.location').html(`<li class='weather-city'>${weatherCity}, ${weatherCountry}</li><li class='country-time'>${weatherDate}</li><li class='weather-icon-url'><img class='weather-pics' src=${weatherIconURL}></li><li class='weather-main'>${weatherMain}</li><li class='weather-temp'>${weatherTemp}</li>`);

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
                                };
                            };
                        x.addListener(weatherPic)

                        function generateDataForPhp() {
                            return {main: weatherMain, 
                                     cityName : weatherCity, 
                                     weatherIcon: weatherIconURL, 
                                     temp : weatherTemp,
                                     date : weatherDate};
                          }

                          var data_for_php = generateDataForPhp();
                        
                        // second ajax call to - php file //
                        $.ajax({
                            type: 'POST',
                            url: './addweather.php',
                            dataType: "json",
                            data: data_for_php
                        }).done((response2) => {
                                console.log(response2);


                            })

                            // erorr handling
                            .fail (function(jqXHR, exception) {
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
                           
                            console.log("AJAX to PHP server failed");
                            console.log(msg);
                            
                            })

                             // third ajax call - php file //
                        $.ajax({
                            type: 'POST',
                            url: './getweather.php',
                            data: {cityName : weatherCity},
                            dataType: "json"
                        }).done((response3) => {
                            console.log(response3)
                            if (response3.length > 1) {
                            // check for past data if records show //
                            for(let i = 1; i < response3.length; i++) {
                                var obj = response3[i]
                                // create lists from response obj
                                if (i===1) {
                                    $('.header-history').html("<h4 class='weather'>Past Weather</h4>")
                                    $('.city-history').html("<tr><td class='historydescription'>" + obj[0] + "</td></tr><tr><td class='historytime'>" +obj[1]+ "</td></tr><tr><td class='historyicon'><img src=" +obj[2]+"></td></tr>") 
                                            }
                                else if (i < 3) {
                                    $('.city-history').append("<tr><td class='historydescription'>" + obj[0] + "</td></tr><tr><td class='historytime'>" +obj[1]+ "</td></tr><tr><td class='historyicon'><img src=" +obj[2]+"></td></tr><") 
                                    }
                                }
                            }    
                            
                            else {
                                $('.city-history').empty();
                                $('.weather').empty();
                            }
                            
                        })

                            // error handling
                            .fail (function(jqXHR, exception) {
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
                           
                            console.log("AJAX to PHP server failed");
                            console.log(msg);
                            
                            }); 
                    
                    };

                /* error handling */
                })
                .fail (function(jqXHR, exception) {
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

