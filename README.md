# Single Page Application with React Router

* displays a list of 1000 entries in a wireframe design;
* uses pagination and shows 20 entries/page; 
  - pagination component shows the sum of all available entries;
  - every time user switches between pages, a new request to backend is made and new 20 entries are sent and displayed in frontend;
* allows filtering entries:
  - according to start date - you can select entries from a respective month on each page;
  - category (still WIP) - multiple choice - you can select entries from one ore more categories on each page;
* redirects to detail view of each entry by clicking on its name and back to main view;

### Built with
* React.js
* Express.js


### Available Scripts

In the main directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Further steps:
* finishing category filter;
* replace 'hard coded' array of months in date filter and get current month dynamically with JS;
* adjust pagination bar:
  - show only the current page number + a few pages behind and a few pages afterwards and not all pages;
  - hide it when less workouts than 20;


