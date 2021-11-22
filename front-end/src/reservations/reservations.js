import React, { useState } from "react";
import { useHistory } from "react-router";
import { createReservation } from "../utils/api";

export default function Reservations() {
  const history = useHistory();
  const [reservationsErrors, setReservationsErrors] = useState(null);

  const initialReservationData = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  };

  const [reservationData, setReservationData] = useState({
    ...initialReservationData,
  });

  const handleInputChange = (event) => {
    setReservationData({
      ...reservationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    const errors = [];
    // findErrors(reservationData.reservation_date, errors);
    if (errors.length) {
      setReservationsErrors({ message: errors });
      return;
    }

    try {
      reservationData.people = Number(reservationData.people);
      await createReservation(reservationData, controller.signal);
      const date = reservationData.reservation_date;
      history.push(`/dashboard?date=${date}`);
    } catch (error) {
      setReservationsErrors(error);
    }
    return () => controller.abort();
  };

  const handleCancel = () => {
    history.push(`/dashboard`);
  };

  return (
    <>
      {/* <ErrorAlert error={reservationsError} /> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          className="form-control"
          id="first_name"
          placeholder="First Name"
          value={reservationData.first_name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="last_name"
          className="form-control"
          id="last_name"
          placeholder="Last Name"
          value={reservationData.last_name}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="mobile_number"
          className="form-control"
          id="mobile_number"
          placeholder="Mobile Number"
          value={reservationData.mobile_number}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="reservation_date"
          className="form-control"
          id="reservation_date"
          placeholder="YYY-MM-DD"
          value={reservationData.reservation_date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="reservation_time"
          className="form-control"
          id="reservation_time"
          placeholder="HH:MM"
          value={reservationData.reservation_time}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="people"
          className="form-control"
          id="people"
          placeholder="Number of guests"
          value={reservationData.people}
          onChange={handleInputChange}
          required
          min="1"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-danger" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </>
  );
}
