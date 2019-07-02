import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import myEventsList from "../helpers/events";
//import "../node_modules/react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const mEventsList = [];
const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

export default MyCalendar;
