/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItineraryItems = /* GraphQL */ `
  mutation CreateItineraryItems(
    $input: CreateItineraryItemsInput!
    $condition: ModelItineraryItemsConditionInput
  ) {
    createItineraryItems(input: $input, condition: $condition) {
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
export const updateItineraryItems = /* GraphQL */ `
  mutation UpdateItineraryItems(
    $input: UpdateItineraryItemsInput!
    $condition: ModelItineraryItemsConditionInput
  ) {
    updateItineraryItems(input: $input, condition: $condition) {
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
export const deleteItineraryItems = /* GraphQL */ `
  mutation DeleteItineraryItems(
    $input: DeleteItineraryItemsInput!
    $condition: ModelItineraryItemsConditionInput
  ) {
    deleteItineraryItems(input: $input, condition: $condition) {
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
export const createItineraries = /* GraphQL */ `
  mutation CreateItineraries(
    $input: CreateItinerariesInput!
    $condition: ModelItinerariesConditionInput
  ) {
    createItineraries(input: $input, condition: $condition) {
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
export const updateItineraries = /* GraphQL */ `
  mutation UpdateItineraries(
    $input: UpdateItinerariesInput!
    $condition: ModelItinerariesConditionInput
  ) {
    updateItineraries(input: $input, condition: $condition) {
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
export const deleteItineraries = /* GraphQL */ `
  mutation DeleteItineraries(
    $input: DeleteItinerariesInput!
    $condition: ModelItinerariesConditionInput
  ) {
    deleteItineraries(input: $input, condition: $condition) {
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
export const createFlights = /* GraphQL */ `
  mutation CreateFlights(
    $input: CreateFlightsInput!
    $condition: ModelFlightsConditionInput
  ) {
    createFlights(input: $input, condition: $condition) {
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
export const updateFlights = /* GraphQL */ `
  mutation UpdateFlights(
    $input: UpdateFlightsInput!
    $condition: ModelFlightsConditionInput
  ) {
    updateFlights(input: $input, condition: $condition) {
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
export const deleteFlights = /* GraphQL */ `
  mutation DeleteFlights(
    $input: DeleteFlightsInput!
    $condition: ModelFlightsConditionInput
  ) {
    deleteFlights(input: $input, condition: $condition) {
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
