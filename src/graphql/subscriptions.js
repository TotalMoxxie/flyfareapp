/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItineraryItems = /* GraphQL */ `
  subscription OnCreateItineraryItems(
    $filter: ModelSubscriptionItineraryItemsFilterInput
  ) {
    onCreateItineraryItems(filter: $filter) {
      id
      Type
      Name
      Location
      Date_and_Time
      Duration
      Notes
      itinerariesID
      FlightItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateItineraryItems = /* GraphQL */ `
  subscription OnUpdateItineraryItems(
    $filter: ModelSubscriptionItineraryItemsFilterInput
  ) {
    onUpdateItineraryItems(filter: $filter) {
      id
      Type
      Name
      Location
      Date_and_Time
      Duration
      Notes
      itinerariesID
      FlightItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteItineraryItems = /* GraphQL */ `
  subscription OnDeleteItineraryItems(
    $filter: ModelSubscriptionItineraryItemsFilterInput
  ) {
    onDeleteItineraryItems(filter: $filter) {
      id
      Type
      Name
      Location
      Date_and_Time
      Duration
      Notes
      itinerariesID
      FlightItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateItineraries = /* GraphQL */ `
  subscription OnCreateItineraries(
    $filter: ModelSubscriptionItinerariesFilterInput
  ) {
    onCreateItineraries(filter: $filter) {
      id
      Name
      Description
      Creation_DateTime
      Rel1 {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateItineraries = /* GraphQL */ `
  subscription OnUpdateItineraries(
    $filter: ModelSubscriptionItinerariesFilterInput
  ) {
    onUpdateItineraries(filter: $filter) {
      id
      Name
      Description
      Creation_DateTime
      Rel1 {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteItineraries = /* GraphQL */ `
  subscription OnDeleteItineraries(
    $filter: ModelSubscriptionItinerariesFilterInput
  ) {
    onDeleteItineraries(filter: $filter) {
      id
      Name
      Description
      Creation_DateTime
      Rel1 {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFlights = /* GraphQL */ `
  subscription OnCreateFlights($filter: ModelSubscriptionFlightsFilterInput) {
    onCreateFlights(filter: $filter) {
      id
      Airline
      Flight_No
      Departure_Airport
      Arrival_Airport
      Departure_DateTime
      Arrival_DateTime
      Flight_Status
      Flight_Price
      itineraryitemsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateFlights = /* GraphQL */ `
  subscription OnUpdateFlights($filter: ModelSubscriptionFlightsFilterInput) {
    onUpdateFlights(filter: $filter) {
      id
      Airline
      Flight_No
      Departure_Airport
      Arrival_Airport
      Departure_DateTime
      Arrival_DateTime
      Flight_Status
      Flight_Price
      itineraryitemsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteFlights = /* GraphQL */ `
  subscription OnDeleteFlights($filter: ModelSubscriptionFlightsFilterInput) {
    onDeleteFlights(filter: $filter) {
      id
      Airline
      Flight_No
      Departure_Airport
      Arrival_Airport
      Departure_DateTime
      Arrival_DateTime
      Flight_Status
      Flight_Price
      itineraryitemsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
