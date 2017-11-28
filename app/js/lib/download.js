const http = require("http");
const fs = require("fs");

module.exports = function(url, onUpdate, onFinish, onError) {
    /*console.log("download(" + url + ")");
    console.log(onUpdate);
    console.log(onFinish);
    console.log(onError);*/

    if (url.startsWith("file://")) {
        console.log("url is a file, reading instead: " + url);
        fs.readFile(url, "utf8", function(error, data) {
            if (error) {
                if (onError)
                    onError(error);
                else
                    console.log("Error in download.js: " + error);
            }
            else {
                onFinish(data.length, data.length, data);
            }
        });
    }
    else {
        var request = http.get(url, function(response) {
            var len = parseInt(response.headers['content-length'], 10);
            var responseCode = response.statusCode;
            var body = "";
            var cur = 0;
            var total = len; // bytes

            response.on("data", function(chunk) {
                body += chunk;
                cur += chunk.length;

                if (onUpdate)
                    onUpdate(cur, total);
            });

            response.on("end", function() {
                if (responseCode && responseCode >= 400) {
                    if (onError) {
                        onError(body, responseCode);
                    }
                }
                else {
                    if (onFinish) {
                        onFinish(cur, total, body, responseCode);
                    }
                }
            });


        });

        request.on("error", function(e){
            if (responseCode && responseCode >= 400) {
                if (onError) {
                    onError(e, responseCode);
                }
            }
        });
        
    }
};