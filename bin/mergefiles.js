var fs = require('fs');
module.exports = {
 mergeJob: function(mergeFiles) {
    var components = mergeFiles['sourceFiles'];
    var output = mergeFiles['outputFile'];
    fs.writeFileSync(output, '/* Generated merged file: '+ (new Date()).toString() +' */' + "\n");
    headingLog('Building bundle ' + output);
    for (var i = 0; i < components.length; i = i + 1) {
        console.log('New file: '+components[i]);
        fs.appendFileSync(output, fs.readFileSync(components[i]).toString());
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

/**
 * Used to log an action in Sky blue color so that it stands out
 */
function headingLog(string) {
        console.log('\n\n\033[36m' + string + '\033[0m');
}
