export const filteredByCustomerName = (arr, filterParams) => {
  for (const item of arr) {
    const filteredCustomers = item.customers.filter((customer) =>
      customer.includes(filterParams.customerName)
    );
    if (filteredCustomers.length > 0) {
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
