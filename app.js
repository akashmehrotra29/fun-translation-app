var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector ("#txt-input");
var outputDiv = document.querySelector ("#output");

var url = "https://api.funtranslations.com/translate/valyrian.json"; //url of api

function generateURL (text) {
    return url + "?text=" + text;   //Generating url for get request
}

btnTranslate.addEventListener ("click", function clickEventHandler() {
    
    fetch (generateURL(txtInput.value))     //fetch from url
    .then (response => response.json())     //then convert response to json
    .then (json => {                        //then write translated text to output box
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })

    .catch(function errorHandler(error){    //catch block to handle error when server doesn't respond
        console.log ("error has been occured"+error);
        alert("Something is wrong with server. Please try again later");
    })
});