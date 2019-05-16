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

###U.S. Web Design System
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

###Mailchimp
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
* Footer ``` Ongoing ```
* Header elements ``` Ongoing ```
* Jumbotron ``` Ongoing ```
* Buttons ``` Working Order ```
* Alerts ``` Ongoing ```

In addition, below are components to be created if permitted by the time constraints.

## Additional Components
* Grid system ``` Working Order ```
* Form or form elements ``` To be determined ```
* Cards ``` To be determined ```

# Design Process Method
A proper management of actions is required for the project to be completed in the most efficient manner. As such, this project will make use of Trello for project management. This would allow for better work organization and a method to quickly grasp the situation on each of the components to be created. During the creation process, GitHub will be used for version control to reduce the time between coding and experimentation. Adobe XD will be used for the design and idea mock-ups to separate design and coding time as much as possible.
