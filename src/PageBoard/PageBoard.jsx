import { createGlobalStyle } from "styled-components";
import ListOfEvents from "./styled components/ListOfEvents";
import ListItemOfEvents from "./styled components/ListItemOfEvents";
import EventTitle from './styled components/EventTitle';
import InnerLiContainer from './styled components/InnerLiContainer';
import EventShortInfo from './styled components/EventShortInfo'

export default function PageBoard (props) {
    
    const listOfmonth = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'];

    const GlobalStyle = createGlobalStyle`

        * {
    
            margin: 0;
            padding: 0;
            border: 0;
            outline: none;
            box-sizing: border-box;
            list-style: none;
        }
    `

    return (

        <ListOfEvents>
            <GlobalStyle />
            {props.events.map((item, index) => {

                const [yearStart, monthStart, dayStart, timeStart] = item.time.start.split(/[-T]/);
                const [yearEnd, monthEnd, dayEnd, timeEnd] = item.time.end.split(/[-T]/);

                const [hourStart, minuteStart, secondStart] = timeStart.split(':');
                const [hourEnd, minuteEnd, secondEnd] = timeEnd.split(':');

                let hours;
                let minutes;

                if (yearStart === yearEnd && monthStart === monthEnd && dayStart === dayEnd) {

                    const startMinutes = parseInt(hourStart) * 60 + parseInt(minuteStart);
                    const endMinutes = parseInt(hourEnd) * 60 + parseInt(minuteEnd);
                    
                    const diffMinutes = endMinutes - startMinutes;
                    
                    hours = Math.floor(diffMinutes / 60);
                    minutes = diffMinutes % 60;
                }
                
                return (

                    <ListItemOfEvents key={index + 'Date'}>
                        <EventTitle>{item.name}</EventTitle>
                        <InnerLiContainer>
                            <EventShortInfo>{item.location}</EventShortInfo>
                            <EventShortInfo>{item.speaker}</EventShortInfo>
                            <EventShortInfo>{dayStart} {listOfmonth[+monthStart]} {yearStart}, {hourStart}:{minuteStart}</EventShortInfo>
                            <EventShortInfo>{hours === 0 ? '' : hours + ' hours'} {minutes === 0 ? '' : minutes + ' minutes'}</EventShortInfo>
                        </InnerLiContainer>
                    </ListItemOfEvents>
                )
            })}
        </ListOfEvents>
    )
}