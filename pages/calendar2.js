import FullCalendar from '../components/fullcalendar'
export default function Home() {
    return (
        <div>
            <FullCalendar defaultView='dayGridMonth' />
            <FullCalendar defaultView='timeGridWeek' />
        </div>
    )
}