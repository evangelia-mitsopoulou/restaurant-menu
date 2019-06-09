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

Criteria of categorisation of building blocks in Atomic Design are the size and complexitiy of them. The smallest ones such as buttons are the atoms, the sligtlhy more complex ones that contain a few atoms within them are the molecules and the bigger ones are usually containers of multiple molecules. By keeping and organizing the components in these 3 levels, we make easier their reusability within the project. If for example we store as a molecule the course card component and if this component needs to be used in more than one places in the app, then it can easily be imported in another (organism) component. The power of this categorisation is not just a matter of "tidying up " the components into folders. The true power is the mental abstraction of UI components into independent entities which as such can be integrated into other parts of the same project or to an even larger scale accross different projects. Thus they facilitate and accelarate the development process. In order to share these UI abstractions accross different projects we would need to store them in their own respository. Mostly atoms and molecules are reusable accross differeent projects and are stored in their own library-like repository. Organsims are project specific. For purposes of this task, i keep all 3 levels within the same project. <br/><br/>

 Thanks to [Material UI](https://material-ui.com/), which is is the most popular React UI framework, the development of the aforementioned components can be done very quickly. More specifically, atoms of Material UI such as buttons and texts are often the standard ones that are integrated in projects. In addition molecules such as Cards are also quite oftern reusable. So quite a few atoms and molecules are already designed in Material UI and we reuse them and integrated them directly in our apps. In the current project Button, Typogragphy-Text, Radio Group and Cards are atoms and molecules respectively that have been used from Material UI. That means under our atoms folder we don't need to have a Button or Typography/Text or RadioGroup because the Masterial UI ones were used. Where did they used? Inside the molecules.  So, under the 3 folders that were described above, we store only our own custom components, the ones that are developed within the company and are conforming to design requirements of the company. However i left on purpose under atoms some example-subfolders in order to give a hint to future developers how they would structure their custom atoms.<br/>

So mostly our custom components are molecules and organisms and within them we integrate either just Material UI atoms or just custom atoms or more often a mixture of them. The molecule that was used from Material UI is the Card. So the workflow is the following: First we categorize conceptually a building block/UI component that we want to develop into one of the 3 categories. Then we check if this UI component exists already in Material UI in order to reuse it. If it exists we reuse it and make any necessary css adjustments. If the UI compoment is quite custom and specific to the project then we build it from scratch.<br/>
 
For every component there is folder under which there is a sass file and a jsx file. I strongly support the splitting of css formating from template and application logic. The idea of mixing css with javascript, as is done in the <i>styled components</i> approach is against the original nature of these technologies. So to style the components i used a hybrid solution of css modules and component namespacing. In this way the component classes are locally scoped. If there was a unit test for this component, its file could be also placed at this level. The naming convention that was adopted is PascalCase for jsx files and camelCases for sass files. 

Most components are dummy, they don't have any application logic. They are just consumers of the props coming from the parent container. Their event handlers are assigned back to the parent components, whose event handlers are assigned back to grandparent App component. Sometimes some data coming from the parent should be manipulated before beeing rendered in the child's template and in these cases some small logic is being done locally on the component i.e. in Allergy Info (molecule) component we transform a Set into an Array in order to make it iterable and in Card (molecule) component there is some local logic regarding the caclulation of the spiciness level.


#### Atoms

Based on what was explained above, scope of this folder is to hold all custom atoms developed internally by company's developers. This is often the case when there is a requirement within the company explicitly for custom designs, whose "look and feel" is not met by Material UI ones. 


#### Molecules

These building blocks are more complex in their structure in comparison with the previous ones and act as wrapper elements of more than one atoms. They can contain either only Material UI ones, or only custom ones or a mixture of both. The AllergyInfo molecule is an example of a purely custom molecule. It contains a text title and the list of allergic ingredients. Navigator Bar is a hybrid one which within a custom div wrapper contains a material UI Button. This component visually refers to the bottom sticky opaque bar that contains the next button. The Menu Selector component, which is the top container which contains the course categories technically is a pure replication of a Material UI one. Lastly, the Course Card component is also a Material UI one, whose structure has been a bit modified by using other Material UI atoms. So far we described mostly the technical details of the templates/layout of the components. The methodology and architecture of their css will be more thoroughly described in a later section.



#### Organisms

These building blocks are containing more than one molecules within them. Card List and Results are the two organisms designed for this project. Card list is a grid container that contains cards. Visually it is the main area of the screen in which the cards are displayed in a Grid system. The latter has been used from Material UI. A fluid grid design has been built, meaning for extra small screens there is one column layout, for small screen two column layout, for medium screen a 3 column layout and for large screen a 4 column layout. In the sass file of this component media queries and overriding of breakpoints have been used to achieve the fluid responsiveness. More specifically the width of the card item is calculated based on the following pattern:<br/>

`width = card-item-width *X + X*2 + 4;` <br/> 

where X is the number of columns. The "X*2" is the sum calculation of the pixels of the border of each card item and 4 is an extra space because on hover on cards an extra border is added and there should be enough space to keep the item on the same row. 


### Styles

The folder structure under styles is following [ITCSS methodoloy](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/). This methodology is very handy and enforces a maintanble and extenndible css architecture. In this folder we keep the css that is shared accross the whole application. Instead of having just a styles.css file which is the most common case, we architect and orchestrate it in the following layers:

* settings
* elements
* tools  

There are a few more layers in the methodology referenced above. For the purposes of this project only the above 3 were needed. The 4th one, the components layer is collocated at the same level with its respective .jsx under the components/**/.scss level. As the application grows the rest layers of ITCSS will be neded. In the settings subfolder we store all variables. These are used with the sass preprocessors and contain either color-related variables or typographic variables. By storing in variables such css aspects we make very easy any future change. If in the future we need to change the warning color of the application of the primary color of our custom buttons we will need only in one place in the code to make the change. In elements subfolder we have styling for bare HTML elements like html, body, h1 etc. Under tools subfolder we usually have all mixins and utility classess. This is a neat architecture that helps keeping things clean. In addition we can easily find css and check for any duplicates of code.


### Theme

Conceptually theme is related with CSS. However it is placed in its own folder because it is javascript. In theme.js file within the theme folder i [overwrote the default skin of Material UI](https://material-ui.com/customization/themes/) components that have been used in the project. Overrides here refer to both skin and structural css changes of Material UI components. If we want to modify the css of a Material UI Component by adding new css properties and not overriding existing ones we can write them directly in the sass files of the respective components. So in Theme we customize the css of Material UI components. The customisation of our own custom components is made directly in the sass files of these and depending on the type of change we want we can modify the css at different layers of the aformentioned ITCSS architecture.

To further elaborate on the above and make a bit more clear how a customisation at Material UI components level can take place, let's use examples from the code to describe 

* what is a skin css override on a Material UI component, 
* what is a structural css override on a Material UI component and
* what is an extension to the css of a Material UI component

The color and background color properties of the containedPrimary of the MuiButton is a skin override because it has to do with colors. The flexDirection of MuiFormGroup is a structural css because it refers to layout. In MuiCardContent at CourseCard.scss the text-align property is an extension to the css of MuiCardContent.

### Data

In this folder we store our mocked data in json files. 

### Services

This folder will contain the actual services and API calls to the server. By using Fetch API the mocked json could be consumed here. For purposes of this project the raw json data were directly referenced within the components.


## Technical Discussions

In this section i will draw the attention of some UX and Javascript issues which i took into consideration while developing the application. 

### Spicy Level Calculation

Every course item has a specific level of spiceness. A very standard approach in food menus to visualise spiceness is via the pepper icons. I used the fire icon instead, cause there was no pepper icons available in Material UI. In order to specify how spicy is a food i decided to map the 4 different spicy Levels into 3 visual levels, one fire, two fires and three fires. Food items whose spicy Level is one have one fire icon in their card, food items whose spicy Level is 2 or 3 have 2 fire icons in their card and food items with spicy Level 4 have 3 fire icons in their card. Of course food items whose spicy Level is 0 don't have any fire icon at all. The mapping might be subjective, however i want to point out the need in such cases to automatize and visualize some important info to the users by means of infographics. Technically i implemented this by creating an Array with a lenght equals to the spiceness level (based on the mapping above). Then i filled the array with values equals to the spiciness Level in order to make it iterable and to render in the template the icons as many times as the length of the array.


### Set for Allergy Info

The allergic ingredients that are included in the items that the user has selected in order to set up his/her menu are displayed in the results page. Often there is an overlapping on the ingredients between two food items. In such a case we woudn't need in the allergy info list in the results page to have a repetition of some ingredients and duplicates and triplicates. For this reason the most suitable data type from ES6 is the Set. It automatically removes any duplicate value if is being added to it. 


### Conditional Rendering (not Routing)

No routing was implemented because it was not needed for the purposes of the specific project. We have one view which is the "Food Menu Selector". The transition to the results page is implemented with conditional rendering. In more complex projects a routing would have been implemented.

### Multiline ellipsis

This is a very common design problem which is often emitted in development. It refers to the case where a very lengthy text exceeds the space it is supposed to cover and it overlaps with other html elements. In such cases we need to use the multiline ellipsis class on the text node. This class works as following: 3 dots (...) are displayed when the text exceeds a specific height. Such text-overflow issue is quite common and for that reason the css class for this is under styles/tools folder, which is shared accross the whole application.



