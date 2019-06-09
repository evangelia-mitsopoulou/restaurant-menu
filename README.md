This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation 

In the project directory, you can run:

`npm start` or `yarn start`

Runs the app in the development mode.<br> 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.


## Project Architecture 

The current project is built with React v.16.8.0, in node v.12.0 and with yarn v. 1.16.0.

The main folder structure consists at its first level (under src folder) of the following:

 * components
 * data
 * styles
 * theme
 * services


### Components

The Components folder contains the main building blocks of the application and is divided into 3 subfolders. This categorization is following the principles of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). By implementing this mental model we set up the ground for a maintainanble, reusable and extendible frontend architecture. <br/>

Criteria of categorisation of building blocks in Atomic Design are the size and complexitiy of them. The smallest ones such as buttons are the atoms, the sligtlhy more complex ones that contain a few atoms within them are the molecules and the bigger ones are usually containers of multiple molecules. By keeping and organizing the components in these 3 levels, we make easier their reusability within the project. If for example we store as a molecule the course card component and if this component needs to be used in more than one places in the app, then it can easily be imported in another (organism) component. The power of this categorisation is not just a matter of "tidying up " the components into folders. The true power is the mental abstraction of UI components into independent entities which as such can be integrated into other parts of the same project or to an even larger scale accross different projects. Thus they facilitate the development process. In order to share these UI abstractions accross different projects we would need to store them in their own respository. Mostly atoms and molecules are reusable accross differeent projects. Organsims are project specific. For purposes of this task, i keep all 3 levels within the same project. <br/><br/>

 Thanks to [Material UI](https://material-ui.com/), which is is the most popular React UI framework, the development of the aforementioned components can be done very quickly. More specifically, atoms of Material UI such as buttons and texts are often the standard ones that are integrated in projects. In addition molecules such as Cards are also quite oftern reusable. So quite a few atoms and molecules are already designed in Material UI and we reuse them and integrated them directly in our apps. In the current project Button, Typogragphy-Text, Radio Group and Cards are the Material UI atoms/molecules that have been reused. That means under our atoms folder we dont need to have a Button or Text component because the Masterial UI one was used. In other words, in the 3 folder that were described above, we store only our own custom components, the ones that are developed within the company. Only if we want to desing our own buttons for example we need to build the button component. On purpose i left the folder under atoms there, in order future developers to see what kind of atoms we would need. 
 
However if for any reason we would like to design our own custom buttons has  In such a case, our atoms folder should not have a button component because it will be reused from Material UI.
 
Most components are dummy, while application logic is contained only on the app component. They just consume props. 

Naming Convention that was used in the project is that for .jsx files we use Pascalcase and for css we use camelCase.

#### Atoms

Atoms are often the most reusable building blocks. Many times within a project we see the same or similar atoms such as buttons, labels, icons etc. Often in companies, we see the same atoms being reused in more than one projects. This is normal and is part of the branding management. Unique Design System speaks for branding.
If we collect all of our atoms in one folder and explicitily 

Most of the Atoms are reused from Material UI. However i left on purpose the substructure of this folder in order to give a clue to other developers on what kind of components could be here. 


#### Molecules

These building blocks are more complex in comparison with Atoms and contain a few items within them. They act as wrapper elements on atoms (Material UI, or our own custom ones) or they are a replication/implementaiton of an existing molecule from Material UI.


#### Organisms

These building blocks are containing more than one molecules within them. Card List and Results. 


### Styles

The folder structure under styles is following [ITCSS methodoloy](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)


### Theme

Conceptually theme is relatd with CSS. However it is placed in its own folder because it is javascript. Within here we [customize Material UI](https://material-ui.com/customization/themes/) with our own theme. 


### Data

In this folder we store our mocked data in json files. 

### Services

This folder will contain the actual services and API calls to the server. By using Fetch API the mocked json could be consumed here. 


## Technical Discussions

### Spicy Level Calculation
### Set for Allergy Info
### Map for Selected Courses
### Grid System
### Conditional Rendering (not Routing)




