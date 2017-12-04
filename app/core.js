const {app, BrowserWindow} = require("electron");
const url = require("url");
const path = require("path");
const download = require("./js/lib/download");
const fs = require("fs");
const mkdirp = require("mkdirp");
const fmd5 = require("md5-file")
const util = require("util");

require("electron-context-menu")({
    prepend: (params, browserWindow) => [{
        // label: "Rainbow",
        // Only show it when right-clicking images
        // visible: params.mediaType === "image"
    }]
});

/*
let server_domain = "file://C:/Users/Matt/git/zcelectron/www"
let manifest_url = util.format("%s/client/manifest.txt", server_domain);
let module_url = function(file) { return util.format("%s/client/src/%s", server_domain, file); }

let viewHTMLFile = "view.html";
let viewJSFile = "view.js";
let appJSFile = "app.js";
let packagerJSFile = "packager.js";
*/

let win

/*
function fwrite(file, data, onSuccess, onError) {
    let parentDirectory = file.substring(0, file.lastIndexOf(path.sep))
    if (!fs.existsSync(parentDirectory)) {
        console.log("Creating directories to " + parentDirectory);
        mkdirp.sync(parentDirectory);
    }
    
    fs.writeFile(file, data, function(err) {
        if (err)
            onError(err);
        else
            onSuccess();
    })

}

function readManifest(success) {
    download(manifest_url, null, (progress, total, body) => {
        if (body) {
            var lines = body.split(/\r|\n/);
            success(lines);
        }
    });
}

function checkManifestEntry(manifest, i, updated, success) {

    console.log("checkManifestEntry");
    console.log(manifest);
    console.log(i);
    console.log(updated);
    console.log(success);

    if (updated == null)
        updated = 0;
    if (i >= manifest.length) {
        console.log("Out of bounds.");
        success(updated);
        return;
    }

    var line = manifest[i];
    if (!line || line.trim() == "") {
        console.log("Empty line.");
        success(updated);
        return;
    }

    console.log("Line: " + line);
    var tokens = line.split("::");

    var fname = tokens[0];

    var localPath = path.join(__dirname, "modules", fname);

    console.log("tokens: " + tokens[1]);
    var serverMd5 = tokens[1].trim();

    var update = false;
    if (!fs.existsSync(localPath)) {
        console.log(localPath + " -- does not exist.");
        update = true;
    }
    else {
        var localMd5 = fmd5.sync(localPath).trim();
        if (serverMd5.toLowerCase() !== localMd5.toLowerCase()) {
            console.log(localPath + " -- md5 mismatch:\n\tLocal:\t" + localMd5 + "\n\tServer:\t" + serverMd5);
            console.log(localMd5[localMd5.length-1])
            console.log(serverMd5[serverMd5.length-1])
            update = true;
        }
    }

    if (update) {
        updateModule(fname, 
            () => {
                checkManifestEntry(manifest, i + 1, updated + 1, success);
            }, 
            (reason, err) => {
                //TODO: Display an error message and quit
                console.log("[ERROR] Failed to update module " + fname);
                console.log(reason, err);
                app.quit();
            }
        );
    }
    else {
        checkManifestEntry(manifest, i + 1, updated, success);
    }

}

function updateModule(file, success, error) {
    console.log("Updating module: " + file);
    let modulesDir = "./modules";

    let url = module_url(file);
    download(url,
        // OnUpdate
        function(progress, total) { 
            console.log(progress + "/" + total); 
        },
        // OnFinish
        function(progress, total, body) {
            var filePath = path.join(modulesDir, file);
            fwrite(filePath, body, 
                // OnSuccess
                function() {
                    console.log("Module updated successfully");
                    if (success)
                        success(filePath)
                },
                // OnError
                function(err) {
                    if (error)
                        error("fwrite", err);
                }
            );
        },
        // OnError
        function(err) {
            if (error)
                error("download", err);
        }
    );
}

//success: Callback function that takes 
function reloadApplication(success, initial) {
    console.log("reloadApplication");

    readManifest((manifest) => {
        if (manifest) {
            checkManifestEntry(manifest, 0, 0, (updated) => {
                console.log("We updated " + updated + " modules.");
                if (initial || (updated != null && updated > 0)) {
                    win.loadURL("file://" + __dirname + "/modules/view.html");
                }
                if (success)
                    success(updated);
            });
        }
    });
}
*/
function main() {
    
    var WIDTH = 850;
    var HEIGHT = 525;

    win = new BrowserWindow({
        height: HEIGHT,
        width: WIDTH,

        minWidth: WIDTH,
        minHeight: HEIGHT,

        show: true,
        frame: false,
    });

    win.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, "./view.html"),
        protocol: "file:",
        slashes: true,
    }));


    /*reloadApplication(() => {
        setInterval(reloadApplication, 5000);
        win.show();
    }, true);*/
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  // On macOS it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

app.on("ready", main);
