# Quick and dirty usage
* Include the library, and create your merge jobs as the following file `build-job.js`
```
var merge = require('./merge.js');
var mergeJob = {
    "sourceFiles": ['FilePath1', 'FilePath2', 'FilePath3'],
    "outputFile": 'outputFilePath'
};
```
* Run `nodejs ./build-job.js`
* Enjoy.

# TODO
* npm packaging
* Tests
* (optional, might skip) Minify bundle
