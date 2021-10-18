<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Weather Application</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="icon" href="images/weather-icon-favicon.png">
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bellota&family=Bellota+Text&display=swap" rel="stylesheet", type='text/css'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
    <main>
        <div class="title container">
            <div class='center'>
                <div class='row justify-content-center no-gutters top-clear'>
                    <div class ='col-xs-12 col-sm-10 col-md-8 col-lg-6 titlediv'>
                        <h1>Worldwide Weather</h1> 
                    </div> 
                </div>
            </div>
                <div class='row justify-content-center no-gutters'>
                    <div class ='col-xs-12 col-sm-10 col-md-8 col-lg-6 formdiv'>
                        <form id='search-form' class='form-search' name='form-search'>
                            <div>
                                <input class = 'input-country' pattern= '^[a-zA-Z\s.,-]*' type='text' placeholder='Search cities worldwide' title='Please enter the English name for the city you require (dashes and fullstops allowed).' autofocus>
                            </div>
                            <div>
                                <button type='submit' form='search-form'> SUBMIT</button>
                            </div>  
                        </form>
                    </div>
                </div>
                <div class='row justify-content-center no-gutters'>
                    <div class ='col-xs-12 col-sm-10 col-md-8 col-lg-6 searcherrordiv'>
                        <span class='searcherror'></span>
                    </div>          
                </div>
                <div> 
            </div>
        </div>
        <div class='content container'>
            <div class='center'>
                <div class='row justify-content-center no-gutters'>
                    <div class='col-xs-12 col-sm-10 col-md-8 col-lg-6 locationdiv'>
                        <ul class='location'>
                        </ul>
                    </div>
                    <div>
                        <p class='testing'></p>
                    </div>
                </div>
            </div>
        </div>
                                        
    </main>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>