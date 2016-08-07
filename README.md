# Why?
I need a fast, lightweight build JS system with no dependencies. And I don't trust "conventional" JS because this is not a satire -> https://medium.com/friendship-dot-js/i-peeked-into-my-node-modules-directory-and-you-wont-believe-what-happened-next-b89f63d21558

# Screenshot
![Screenshot of a build taking place](/assets/build.png "Fig 1: Example of how a typical build looks")

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
