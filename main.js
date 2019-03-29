// function day_of_week (day) {
//     switch(day) {
//         case 1: return 'Monday';
//         case 2: return 'Tuesday';
//         case 3: return 'Wednesday';
//         case 4: return 'Thursday';
//         case 5: return 'Friday';
//         case 6: return 'Saturday';
//         case 7: return 'Sunday';
//         default: return 'Invalid day of the week';
//     }
// }

// console.log(day_of_week(5));
// console.log(day_of_week(2));
// console.log(day_of_week(4));
// console.log(day_of_week(10));

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

function day_of_week (day) {
    switch(day) {
        case 1: console.log('Monday');
        break;
        case 2: console.log('Tuesday');
        break;
        case 3: console.log('Wednesday');
        break;
        case 4: console.log('Thursday');
        break;
        case 5: console.log('Friday');
        break;
        case 6: console.log('Saturday');
        break;
        case 7: console.log('Sunday');
        break;
        default: console.log('Invalid day of the week');
    }
}

const init = () => {
    day_of_week(5);
    day_of_week(2);
    day_of_week(6);
    day_of_week(10);
}
init();