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


### Components

The Components folder contains the main building blocks of our application and is divided into 3 subfolders. This categorization is following the principles of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). By implementing this mental model we set up the ground for a maintanble, reusable and extendible frontend architecture. 

[Material UI](https://material-ui.com/) is the most popular React UI framework. It was used extensively in the project to design UI components i.e. Cards, Button, RadioGroup for the menu selector. 
 
Most components are dummy, while application logic is contained only on the app component. They just consume props. 

Naming Convention that was used 

#### Atoms

Most of the Atoms are reused from Material UI. However i left on purpose the substructure of this folder in order to give a clue to other developers on what kind of components could be here. 


#### Molecules

These building blocks are more complex in comparison with Atoms and contain a few items within them. They act as wrapper elements on atoms (Material UI, or our own custom ones) or they are a replication/implementaiton of an existing molecule from Material UI.


#### Organisms

These building blocks are containing more than one molecules within them. Card List is a good example.


### Styles

The folder structure under styles is following [ITCSS methodoloy](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)


### Theme

Conceptually theme is relatd with CSS. However it is placed in its own folder because it is javascript. Within here we [customize Material UI](https://material-ui.com/customization/themes/) with our own theme. 


### Data

In this folder we store our mocked data in json files. 


## Technical Discussions

### Spicy Level Calculation
### Set for Allergy Info
### Map for Selected Courses
### Grid System
### Conditional Rendering (not Routing)




