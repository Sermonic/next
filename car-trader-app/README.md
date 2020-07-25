## Used in this application:

- Next.js
- TypeScript
- SQLite
- Formik
- Material-UI

### About This Apllication

In this mini-project, I've created an application to sell used cars, called Car Trader.
We have a search page with multiple filters, a listing page, a details page, and an FAQ page.

I've created 4 dropdown filters based on the URL querystring. When the page loads, we will check if the URL contains any filters in the querystring, if it does we select by default that value in the dropdown.

I'm used getServerSideProps to load all the makes. Material-UI used for style.

When the "make" dropdown changes, an HTTP call is performed to load all the models available for the selected "make" dropdown. With the result of the HTTP call, we populate the "model" dropdown.

I'm used Formik and SWR (useSWR) in this Next.js application.

Created the paginated and filtered list of cars.

Inside getPaginatedCars function I'm created a SQL query to filter our cars, using the filters I have done on the search page. Then I use SQLite's LIMIT and OFFSET to paginate our cars.

When our query is finalized, I call it inside getServerSideProps in order to display our list of cars.
