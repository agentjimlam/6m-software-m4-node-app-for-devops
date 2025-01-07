# Notes for lesson 4.5

Shift left policy = when find and deliver bugs 

CI enables Shift-lift. Shift-left enables Agile too.

CI pipeline:
1. build / compile
eg. npm install

2. Run test

3. Upon passing the tests, publish container image to registry and proceed to the CD pipeline


Why we separate our build and test set-ups in config.yml
- so that we know where the code fail, is it in build or in the test stage?

Where are the containers created?
- on CircleCi servers

npm i -D jest-environment-jsdom


config.yml is a declarative file

React or java is imperative

assignment 
- to add a new job inside the config, "publish"