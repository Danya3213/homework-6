import './App.css';
import PageBoard from './PageBoard/PageBoard';
import upcomingEvents from './upcoming-events.json';

export default function App () {

  return (

      <PageBoard events = {upcomingEvents} />
  )
}