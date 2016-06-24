var fs = require('fs');
module.exports = {
 mergeJob: function(mergeFiles) {
    var components = mergeFiles['sourceFiles'];
    var output = mergeFiles['outputFile'];
    fs.writeFile(output, '/* Generated merged file: '+ (new Date()).toString() +' */' + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
    });
    for (var i = 0; i < components.length; i = i + 1) {
        fs.appendFile(output, fs.readFileSync(components[i]).toString(), function (err, data) {
            if (err) {
                return console.log(err);
            }
        });
    }
 }
};

var read = function(file) {
    console.log('Reading file ' + file);
    fs.readFileSync(file, function(err, data){
        if(err) {
            return console.log("Error: ", err);
        }
        return data;
    });
};
