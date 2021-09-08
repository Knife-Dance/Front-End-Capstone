# Zeus Retail Portal
![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)


<p align="center">
  <img alt="app demo" src="client/demo.gif">
</p>

# Project Catwalk
Hack Reactor front end capstone. We are tasked with updating an old ecommerce front end to modern techonologies. As a group we created three main components which were the Overview, Related Products, Ratings & Reviews. Utilizing React with React hooks accelarated development time and enriched the e-commerce browsing experience.

# Overview
Provides a quick insight on the product. Showing the different styles available, prices, and the images of the product displayed. The Overview displays the hero image front and center. With it having an expanded view to zoom in on the details of the product. Navigating to the styles will show the variances of the product, with images, sizes and product availability.

# Related Products
Related product widgets consist of two parts. One is the Related products which are related to the item displayed by overview component and it changes accordingly. Having carousel of cards let users navigate between the card. And, upon clicking on a star button a modal would pop up which compares the feature between the related card and the prodcut item. Once a card clicked, it would change the overview item as well.
The second part is the outfit section, which is unique to each user. It gives the user the ability to save the current product item and navigating through them.

# Ratings and Reviews
The ratings and reviews widget breaks down rating and review information about the given product, all of which information is provided by users of the site. On page load the widget will request information from the api to dynamically render the correct information on the DOM. You can also interact with the widget to filter, sort, and add reviews.

# Installation
Install the project with npm.
'npm install'
'npm run watch'
Move index.html into public
  -- modify index.html to include new DIV with id="app"
  -- modify script tag to include main.js

