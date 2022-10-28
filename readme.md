# Google Chorme Extensions - Step by Step

#### Extention Name: Get Your Screen Size Properties


#### Step - 1

##### Create a HTML file (index.html) 


```   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <title>Screen Properties</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./assets/bootstrap.min.css">

</head>


<body>

<!--main content two button-->
<section class="p-5">
    <div class="d-flex">
        <button id="btn" class="btn small">Screen Propertise</button>
        <button id="reset" class="ml-4 small btn">Reset</button>
    </div>
    <div id="calculation" class="mt-5">

    </div>
</section>


<!--script need to load-->
<script type="text/javascript" async defer src="./assets/scripts.js"></script>

</body>

</html>

```

#### Step - 2

##### Create a Javascript file (scritps.js)
scritps.js

```
// declare variable
let btn = document.querySelector("#btn");
let reset = document.querySelector('#reset');



// on click to showing screen size
btn.addEventListener("click", (event) => {
    let text = "<ul class='list-unstyled'><li>Total Width x Height:    <b>" + screen.width + "</b>x<b>" + screen.height + "</b></li><br>" +
        "<li>Available Width x Height:    <b>" + screen.availWidth + "</b>x<b>" + screen.availHeight + "</b> </li><br> " +
        "<li>Color depth: " + screen.colorDepth + "</li><br>" +
        "<li>Color resolution: " + screen.pixelDepth + "</li></ul>";
    document.getElementById("calculation").innerHTML= text;

});

// reset button click to reset previous data
reset.addEventListener("click", (event) => {
    document.getElementById("calculation").innerHTML = null;

});

```


#### Step - 3

##### Create a manifest.json file (mendatory file for google chrome extensions)
masifest.json
```
{
   "name": "Get your viewport",
   "description": "Get your viewport height and width",
   "version": "1.0",
   "manifest_version": 3,
   "icons": {
      "16": "./assets/icon16.png",
      "32": "./assets/icon32.png",
      "48": "./assets/icon48.png",
      "128": "./assets/icon128.png"
   },
   "action": {
      "default_icon": {
         "16": "./assets/icon16.png",
         "32": "./assets/icon32.png",
         "48": "./assets/icon48.png",
         "128": "./assets/icon128.png"
      },
      "default_popup": "index.html",
      "default_title": "Image Ratio Calculator"
   }

}

```

#### Now load your file in google chrome extensioins settings, you can the result in the chrome browser
