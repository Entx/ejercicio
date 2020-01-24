class Display{
    constructor(estudiantes){
        this.estudiantes=[];
    }
    leerJson(callback){
                var rawFile = new XMLHttpRequest();
                rawFile.overrideMimeType("application/json");
                rawFile.open("GET", 'db.json', true);
                rawFile.onreadystatechange = function() {
                    if (rawFile.readyState === 4 && rawFile.status == "200") {
                        callback(rawFile.responseText);
                    }
                }
                rawFile.send(null);
            } 
        }
            var h;
            leerJson(function(response){
                jsonresponse=JSON.parse(response);
                h=jsonresponse;
                console.log(jsonresponse);
});

