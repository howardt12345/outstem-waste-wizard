# OutStem Front-end Challenge for Summer 2021 by Howard Tseng

This project was developed for the OutStem Front-end Challenge for Summer 2021. It uses React and Material UI components, with animations handled by Framer Motion. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Live demo [here](https://outstem-2021.howardt12345.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/78417b33-5e58-43de-9796-6d4fc8943b17/deploy-status)](https://app.netlify.com/sites/outstem-waste-wizard/deploys)

## The Challenge

The challenge was to create a waste wizard that allows users to search through a list of househould garbage items to figure our how those items should be disposed and have the ability to place the item in a collection called waste room that sorts the item in different bins.

## Installation and Setup

1. Cloning the repo and navigating to folder:

   ```sh
   git clone https://github.com/howardt12345/outstem-waste-wizard.git
   cd outstem-waste-wizard
   ```

2. Installing dependencies with npm:

   ```sh
   npm install
   ```

3. Starting the development server:

   ```sh
   npm start
   ```

   The site should now be running at `http://localhost:3000`.

### Technical Requirements Met

1. App will be accessible using a browser ✓
2. You can use any framework, library you like ✓
3. Data will come from the dataset mentioned above. ✓
4. Each result will list at least the following information ✓
     - Item name 
     - Item description
     - The bin it belongs in and a picture of such bin (URLs to all pictures can be found in the Data & Assets section)
5. There will be at most 5 results displayed at a time for any query, have a load more button that will display the next 5 results ✓
6. The search will happen as the user types ✓
7. Items in the search result can be added to the “waste room” ✓
8. The “add to waste room” button should be disabled if the item is already in the waste room ✓
9. The waste room should have 4 sections, items will be automatically added to their matching section: ✓
     - Regular trash & curbside pickup
     - Recycling
     - Organics & Yard waste
     - Hazardous Waste
10. When an item is in the waste room their name will be displayed. ✓
11. The app will be optimized for mobile devices like smartphones and tablets. ✓

### Extra Requirements Met

-	Frank thinks it would be nice to have debouncing for the search box since his computer is not very fast ✓
-	Frank is a visual head and would like to see some slick animations on the app (loading, moving items and removing items) ✓