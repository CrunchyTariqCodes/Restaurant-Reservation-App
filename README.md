# Periodic Tables Restaurant Reservation System

View Deployed Application Here: https://tariqs-restaurant-frontend.herokuapp.com/dashboard

## Summary

A restaurant reservation system that allows employees to log  reservation info for each party that wishes to reserve a table at the business' restaurant on a given day, view total reservations by day, search reservations by phone number, edit reservation information, seat parties to available tables, and add tables for parties to be seated at.  

## Installation Instructions

- Fork/Clone this Reopsitory
- Run `npm install` inside root directory
- run `npm start` to start application or refer to the package.json file for custom command line scripts


## API Documentation

POST /reservations adds a new reservation

GET /reservations/:reservations_id returns the reservation with the corresponding id  <br/>

PUT /reservations/:reservations_id updates the reservation with new information <br/>

GET /:reservation_id/status returns the reservation with the corresponding id <br/>

PUT /:reservation_id/status updates the reservation status <br/>

GET /tables returns all of the tables <br/>

POST /tables adds a new table <br/>

PUT /:tableId/seat changes the reservation status to seated and saves the reservation id to the table <br/>

DELETE /:tableId/seat changes the reservation status to finished and removes the reservation id from the table <br/>

## Technologies Used
- [ ] JavaScript
- [ ] React.js
- [ ] Node.js
- [ ] Knex.js
- [ ] Express.js
- [ ] Postgres
- [ ] HTML
- [ ] CSS
- [ ] Bootstrap4
- [ ] RESTful APIs

