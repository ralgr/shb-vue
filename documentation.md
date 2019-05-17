# Introduction
## Background
Three terms that are used interchangeably are style guides, pattern library, and design systems. But according to Toman (2017),  each are their own entities. A style guide is defined as a set of guidelines that help forge a design to convey an identity. It usually contains colours, typography, icons, and so on, which are the building blocks of an identity. Pattern libraries are a collection of reusable independent components complete with documentation usually containing code examples, use context, use instructions, and so on. Lastly, a design system is defined as the one which governs how the other two are used together. Whichever the term, all three are used in creating websites.  

## Project Aim
This project aims to create a modern, web-based pattern library using Vue.js.

To do so, research will be conducted on current best practices and existing pattern libraries to:

  * Generate a guideline for creating a pattern library.
  * Have a reference as to what patterns to include in the pattern library

Afterwards, the patterns contained in the reference will be created using Vue.js. To create and ensure the patterns will perform as they should, adequate resources such tutorials and the Vue.js documentation will used. Finally, a deployment tactic will be employed to propagate the pattern library after the completion of core components.

# Research
## Current Best Practices
Current best practices as defined by Douglas (2018) and Sorensen (2016) are as follows:

* Familiarize with other Pattern libraries – Look for similarities on what is usually included to guide what a pattern library should contain.
*	Ensure there is involvement of all team members – Working with a team, clear communications of expectations and limitations should be present between designers and developers.
*	Pattern hierarchy – Provide pattern use instructions that clearly defines which pattern should be used inside or outside another pattern.
*	Deliver inclusively – Make it as easy as possible to implement, bearing in mind all levels of technical knowledge from beginner to expert. Additionally, demonstrate the pattern library’s value by showcasing its use advantages in different contexts.
*	Integrate in design process early – Increases efficiency in the long run as each pattern is documented with the information being in its freshest state. The longer this is put off, the higher the chance of the information to be lacking intricate details unless it is listed down for future use.
*	Keep it concise – Create patterns for existing use cases and not hypothetical ones to increase work efficiency by making sure the important patterns are created first.
*	Easy updating – Uploading online is a good strategy as it would be the easiest to update being a single code base in addition to easy propagation.
*	Evolution – Update patterns and their documentation based on testing results and emerging use cases.

Based on the information above, the first task would be to look at different existing pattern libraries to determine the most commonly included patterns. The results of this research will be the reference as to what patterns should be included in the pattern library, as opposed to creating whatever patterns that comes to mind without considering if there are use cases for it. Then while creating each pattern, the documentation will be made in parallel to be able to include most information and avoid leaving out intricate details. Further, the documentation would need to contain details on usage instructions and use cases to demonstrate the advantages of the pattern library, while keeping the written information adequate for all levels of technical knowledge. After completion, it should be deployed in a way that is easy to update and can be propagated shortly afterwards. Uploading the pattern library online would be a perfect fit, as doing so would allow for live previews of the patterns in addition to the all the information. Finally, add or update patterns based on research and testing results to make the best use of time.

## Existing Pattern Libraries

As the numbers for pattern libraries are numerous, only four of them will be compared to lessen the scope but still maintain an adequate sample size to gauge which components are usually included in one. As such, Code for America, Max Quattromani, U.S. Web Design System, and Mailchimp will be used.

Below is a summary of what was included in the mentioned pattern libraries.

### Code for America
* Bookmark icon
 - Colour filled boxes with icon in the middle.
 - Icons only with different colours.
* Icons.
 - Social media, navigation, etc.
 - Icomoon.
* Primary and secondary brand colours.
* Layout system.
* Body of text containers.
 - Paragraphs and lists.
* Buttons
  - Standard and with loaders.
  -	Different sizes.
*	Form components.
  -	Input, checkboxes, radio buttons, select etc.
*	Headings
  -	H1 to H6 texts.
*	Links.
  -	Inline and external.
*	Lists by themselves.
  -	Ordered and unordered.
*	Media.
  -	Audio player.
  -	Images.
  -	Video player.
*	Tables.
*	Text components.
  -	Abbreviation popups.
  -	Inline email.
  -	Blockquote.
  -	Code.
  -	Citations.
  -	Image figures.
  -	Horizontal line content separators.
*	Global components.
  -	Footer.
  -	Navigation.
*	Patterns.
  -	Alerts.
  -	Headings with badges.
  -	Hero images.
  -	Jumbotrons.
  -	Profiles.
    -	Image with text and icons for social media.
  -	Cards.
  -	Article preview.


### Max Quattromani
*	Colours.
*	Typography.
*	Headings.
*	Body stylings.
*	Inline stylings.
*	Icons.
  -	Font Awesome.
*	Text alignment.
*	Buttons.
  -	Different sizes.
  -	Themes.
*	Grid system.
*	Headers.
  -	Static images.
  -	Video and audio.

### U.S. Web Design System
*	Buttons.
  -	Different sizes.
*	Tables.
*	Alerts.
*	Dropdown information containers.
*	Forms.
*	Navigations.
*	Headers.
*	Footers.
*	Page layouts.
*	Search bars.
*	Cards.
*	Responsive containers.

### Mailchimp
*	Colours.
  -	Functional, feedback, accent, and neutral.
*	Data visualization.
  -	Charts and information.
*	Grid system.
*	Typography.
*	Buttons.
  -	Standard, with loaders, select buttons, button groups.
*	Dialogs.
  -	Standard movable modals.
  -	Information modal.
*	Feedback.
  -	Essentially alerts.
*	Form.
  -	Separate elements.
*	Icons.
*	Helper classes.
*	Lists.
  -	Unordered, timeline and interactable.
*	Tables.
*	Navigation.
*	Statistics cards.

Overall, the components which appeared across all the selected libraries are:

*	Navigation – Usually overall website navigations but some include dedicated page content navigation.
*	Header elements – Comprises of a mix of different text headers for heading size one through 6, static images, images with text, and hero images.
*	Footer – Containing relevant links to a variety of content such as contacts, legalities, and social media.
*	Form – Contains separate form elements that can be combined to create a form.
*	Alerts – Custom alerts that are styled to emphasize their brand identity.
*	Icons – Two of the four made use Icomoon and Font Awesome. Included navigation icons and social media icons.
*	Cards – A block of content containing an image, text, links, and icons that can either be a profile summary, article teaser, or just a standard text.
*	Grid system – A way to lay out content that goes in line with their design philosophy. This mostly adheres to the ideal of responsive web design.
*	Colours – Colours used throughout the website to convey a brand identity.
*	Buttons – Standard, variants of standard, and buttons with loaders were included. Available also are different sizes.

As such, the pattern library to be built will endeavour to contain the features stated.

# Specifications
As stated above, the aim of this project is to create a modern, web-based pattern library for use in Vue.js. Using the research results as a reference, this project will contain the following patterns as a minimum:

## Core Components
* Navigation ``` Working Order ```
* Footer ``` Working Order ```
* Header elements ``` Working Order ```
* Jumbotron ``` Working Order ```
* Buttons ``` Working Order ```
* Grid system ``` Working Order ```

In addition, below are components to be created if permitted by the time constraints.

## Additional Components
* Form or form elements ``` To be determined ```
* Cards ``` To be determined ```
* Alerts ``` To be determined ```

# Design Process Method
A proper management of actions is required for the project to be completed in the most efficient manner. As such, this project will make use of Trello for project management. This would allow for better work organization and a method to quickly grasp the situation on each of the components to be created. During the creation process, GitHub will be used for version control to reduce the time between coding and experimentation. Adobe XD will be used for the design and idea mock-ups to separate design and coding time as much as possible.

# Design, Planning, Experimentation, and Implementation

## Design, Planning, and Experimentation

To do the project as efficiently as possible, a work plan was created based around separating the design and coding aspect as much as possible. This work route is designed to keep experimentation, which can waste a significant amount of time, to a minimum.

To do so, a design tool that allows for the easy creation of detailed mock-ups is then required. As such, the Adobe XD software is selected to perform this task as it can fulfil the stated requirements while also having an easy learning curve. Initial designs and experimentations for the appearance of components will then be done using the software to have as little impact as possible to the limited time available for this project. Afterwards, these designs will used as a reference upon the creation of the components on Vue.js, while using its documentation to implement the `slot` element. Because of how the design was completed initially, the remaining time will be used purely to create the components thereafter.

## Implementation
The naming convention for the components to be designed will be: `sh` + component name. In addition, global CSS helpers will be available in controlling some elements and specifically present 5 ways to set a components `padding` and `margin`.

### Buttons

The buttons will be created using the `button` tags as a template. It will make use of props to modify its appearance in addition to some default stylings to fit the theme. The Vue.js tag `<slot></slot>` will be used to take input in between the opening and closing tags of the button component to serve as the text inside the button.

Props will be used to modify its appearance and colour to fit different design tastes. These said props are divided into two categories: shape modifiers and colour modifiers. The shape modifiers that consists of `round`, `outline`, and `txt`, can be used to morph the button to different designs akin to the prop names.

* `round` - Changes the shape of the button to contain rounded edges.
* `outline` - Changes the appearance by only showing the text and outline of the button.
* `txt` - Changes the appearance by only showing the text of the button.

Each of the props above, including the default button shape, will have their own respective interaction animation through CSS. Further, the colour modifier props can be added by itself or in combination with the shape modifiers to produce a wide variety of appearances.

* `primary`, `secondary`, `success`, `alert`, and `error` will modify the colour of the buttons set by the themes that the props are named after.   


### Grid System

The grid system will make use of the [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) as the base. The grid system will comprise of two components: the container which will contain the `display: grid` and a component based on the `<div></div>` that can be modified to increase or decrease how many columns it takes up depending on a prop and the desired break point.

The `<shcontainer></shcontainer>` is a 12-column grid that will also be customisable via props. The default setting for the grid will be `full-width`, taking all the horizontal space available on screen with no gutters. The two props, `centered80` and `centered90`, are used to create a centred layout, with the numbers indicating the `vw` value used for each prop. Additionally, `textCenter` prop will align all text inside the container to the centre.

Inside the `<shcontainer></shcontainer>` will be a `div` component that wraps around the contents to be placed on the grid. This component, to be called `<shlayer></shlayer>`, will represent a single row in a grid and is where props can be used to control how many columns it will take up on the `<shcontainer></shcontainer>` grid. These props are divided in 4 categories of breakpoints, which are `xs`, `sm`, `md`, `lg`, and `xl`. In each category, there are 12 levels that corresponds to the number of columns in the grid. For example, the code `<shlayer xs12 md6></shlayer>` will make sure that `xs` devices makes use of all 12 columns until it reaches the `md` breakpoint, on which it would then use 6 columns.

The behaviour of `<shlayer></shlayer>` components inside `<shcontainer></shcontainer>` depends on the placement of contents and the number of columns that each `<shlayer></shlayer>` is set up with. For example, two `<shlayer></shlayer>` components both set on `xs6` will be able to fit in a single row with the order following the order of placement in the template.

### Navigation

Using the navigation pattern, to be called `shnav`, will require the use of the grid system at the moment due to time constraints. This pattern takes in two inputs from the user using two named `slot` templates. The `<template #logo>` will take in either text or a logo. The `<template #links>` will take in links wrapped in the `shlinks` component, thus will require it to be able to create `router-links` throughout the website. As this component makes use of the grid system, its responsiveness can be tweaked inside its code base by simply adding breakpoint conditions on the `shlayer` component. However, this method is unintuitive because it adds extra steps just to alter the component's responsiveness. A more ideal solution and a future update would be to use props to change the breakpoints like `shlayer`, but it will not be implemented at its release due to time constraints.

### Footer

The footer component is coded to take in two inputs from the user using `slot`. The `#copyright` slot will take in text input to show a copyright message, while the `#social` slot will take in links wrapped in the `shlinks` component. The links inside the `shlinks` can be either a text link or an icon link that makes use of `Font Awesome` icons. Using the icons will require additional setup and varies depending on the number of social media required. To do so, it will be required to install [FortAwesome](https://github.com/FortAwesome/vue-fontawesome) to allow Vue.js components to make use of `Font Awesome` icons. Imports as stated on the install instructions would then need to be set on the `main.js` file of the website and then specify which icons will be used. Additionally, there is a separate install needed in addition to the core components for brand icons specifically before being able to define which brand icons are needed.

### Heading Elements

The heading element is named `shresponsive` and is designed to take in two inputs from the user via `slot` templates. The default `slot` will take in an `img` element that is preconfigured using global CSS to be responsive according to its container. The `shresponsive` component will also require `shcontainer` and `shlayer` to work as intended and is intended to be implemented inside the grid system. The second `slot` is called the `#heading-text` and will require a template to take in text input. The `shresponsive` component will use this text input and display it in the centre of the image. In addition to the two inputs, props will be able to modify this component to turn it from a static image header into a hero image header.

For a static image, add the `imgOnly` prop and leave out the `#heading-text`. For a hero image header, remove `imgOnly` prop and a text to be displayed using `#heading-text` slot. The opacity of the image can be controlled using `hero1 to 5` props with the numbers indicating the opacity levels.

### Jumbotron

The jumbotron element is named `shjumbotron` and takes in three user inputs in three named `slots`. In addition, it will also require `shcontainer` and `shlayer` to work appropriately. Each slot is contained by `div` element that will govern the styling for the contents inputted on the `slot`s. The `#jtitle` and `#jsub-title` slot will take in a text input to be used as the jumbotron title and the subtitle respectively. The `#jbuttons` slot is designed to take in buttons, however the functions of the buttons will require the user to specify them at its current stage. Further, the `shjumbotron` can be modified by props that control the background colour and text colour of the text content, like previous components.

* `black` and `white` will control text colours representing their names.
* `dark` and `light` will control background colours representing their names.

# Conclusion

The goal of this project was to create a modern and web-based pattern library. To do so, initial research was done on best practices and existing pattern libraries to guide the direction of the project. This research on best practices resulted in the following:

* Familiarize with other Pattern libraries
*	Ensure there is involvement of all team members
*	Pattern hierarchy
*	Deliver inclusively
*	Integrate in design process early
*	Keep it concise
*	Easy updating
*	Evolution

Barring the practice related to a team, this information was then used as a reference to guide the work put into each step on the creation of the pattern library itself. This included what patterns to create, ideal pattern dependence or independence, deployment tactics, and support direction after completion.
As such, the research on what patterns to possibly include in the project and are created resulted in the following:

* Navigation ``` Working Order ```
* Footer ``` Working Order ```
* Header elements ``` Working Order ```
* Jumbotron ``` Working Order ```
* Buttons ``` Working Order ```
* Grid system ``` Working Order ```


As seen above, the core components are created and are in working order and is modern in design based on the trend of modern aesthetic being `sans-serif` fonts that utilise "flat" design. Additionally, it is web-based by virtue of the components being created specifically for Vue.js. Therefore, the goal of this project is then met.

However, the results are still far from ideal even though the core components are all in working order and can be used in creating a Vue.js website as is. For example, the button component is still only limited to the `button` element and does not include designs for `input` and `anchor` elements as of currently. The navigation, footer, jumbotron, and the header elements are dependent on the grid system being present to be used as intended. This was done due to the limited time available that resulted from having a late start. Ideally, each component should able to be used independent of each other to both limit the size that a user has to download and for separation of concerns. At its current state, the grid system is critical to most of the components, making it doubly important that it is in working order at the least. That said, the grid system is currently the most complete feature in the library due to the easy implementation of the CSS Grid. Further, overall improvement of stylings and code organization should also be improved for users to better understand how a component runs.
