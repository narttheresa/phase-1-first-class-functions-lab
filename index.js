
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
        return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
        return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = (drivers, selectFunction) => {
        return selectFunction(drivers);
}



const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);

const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers);

const selectedDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(selectedDrivers);








function createFareMultiplier (integer) {
        return function(fare) {
          return fare * integer;  
        };
            
}


function fareDoubler(fare) {
    const fareMultiplier = createFareMultiplier(2);
    return fareMultiplier(fare);
}

function fareTripler(fare) {
    const fareMultiplier = createFareMultiplier(3); 
    return fareMultiplier(fare);
}