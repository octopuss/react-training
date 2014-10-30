react-training
==============

Training is organized into 5 parts. Each one is in separate branch, so you can always check desired outcoming result.  Parts are logically separated, demonstrating usage of specific technology or principle.

To start you need to clone this repository using 

    git clone https://github.com/octopuss/react-training.git
list remote branches using

    git branch -r
fetch remote branches using 

    git fetch origin
To switch between branches use

    git checkout part-X
where `part-X` is `master` branch or other branch from the training    

Part 0
------
*Technologies*

*   Gulp
*   Sass
*   Webpack

This part covers setup of simple development stack using `gulp`. It shows how to use it for processing `sass` files and bundling used `javascript` using `webpack`.


*Usage*

to start with this training you need to have `node.js`, `git` installed. 
Moreover you need to have `bower` and `gulp` as global `npm` packages using commands below.

    npm i -g bower
    npm i -g gulp

To initialize this project run commands below

    npm i
    bower i


than use

    gulp

command to process `gulp` tasks. After that `/dist` folder should be filled with result files.
