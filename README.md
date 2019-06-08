This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation 

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br> 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.<br>


## Project Architecture 

The current project is built with React v.16.8.0, in node v.12.0 and with yarn v. 1.16.0.

The main folder structure consists at its first level (under src folder) consists of the following:

 * components
 * data
 * styles
 * theme
 * services


### Components - Atomic Design

The Components folder is divided into 3 subfolders. This categorization is following the principles of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). 



### Styles

The folder structure under styles is following [ITCSS methodoloy](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)


### Theme

Conceptually theme is relatd with CSS. However it is placed in its own folder because it is javascript. Within here we [customize Material UI](https://material-ui.com/customization/themes/) with our own theme. 


### Data

In this folder we store our mocked data in json files. 






