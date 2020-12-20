// Please implement your solution in this file
import {filteredByCustomerName, sortByFlightNumberAndPayLoadCount} from './utils'

export const prepareData = (filterParams) => {
  return (data) => {
    const records = data
      .filter((item) => {
        const { payloads } = item.rocket.second_stage;
        return (
          filteredByCustomerName(payloads, filterParams) &&
          item["launch_year"] === `${filterParams["year"]}`
        );
      })
      .map((each) => ({
        flight_number: each["flight_number"],
        mission_name: each["mission_name"],
        payloads_count: each.rocket.second_stage.payloads.length,
      }))
      
    return sortByFlightNumberAndPayLoadCount(records);

  };
};

export const renderData = (data) => {
  document.getElementById("out").innerHTML = JSON.stringify(data, null, 2);;
};
