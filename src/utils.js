export const filteredByCustomerNameAndYear = (record, filterParams) => {
  const { payloads } = record.rocket.second_stage;
  for (const item of payloads) {
    const filteredCustomers = item.customers.filter((customer) =>
      customer.includes(filterParams.customerName)
    );
    if (
      filteredCustomers.length > 0 &&
      record["launch_year"] === `${filterParams["year"]}`
    ) {
      return true;
    }
  }

  return false;
};

export const sortByFlightNumberAndPayLoadCount = (arr) => {
  arr.sort((a, b) => b.flight_number - a.flight_number);
  arr.sort((a, b) => b.payloads_count - a.payloads_count);
  return [...arr];
};

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response.json();
};
