// Please implement your solution in this file
import {filteredByCustomerNameAndYear, sortByFlightNumberAndPayLoadCount} from './utils'

export const prepareData = (filterParams) => {
  return (data) => {
    const records = data
      .filter((item) => {
        return filteredByCustomerNameAndYear(item, filterParams);
      })
      .map((flight) => ({
        flight_number: flight["flight_number"],
        mission_name: flight["mission_name"],
        payloads_count: flight.rocket.second_stage.payloads.length,
      }))

    return sortByFlightNumberAndPayLoadCount([...records]);

  };
};

export const renderData = (data) => {
  document.getElementById("out").innerHTML = JSON.stringify(data, null, 2);;
};
