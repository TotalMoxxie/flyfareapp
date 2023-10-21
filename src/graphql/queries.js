/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItineraryItems = /* GraphQL */ `
  query GetItineraryItems($id: ID!) {
    getItineraryItems(id: $id) {
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
export const listItineraryItems = /* GraphQL */ `
  query ListItineraryItems(
    $filter: ModelItineraryItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItineraryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Type
        Name
        Location
        Date_and_Time
        Duration
        Notes
        itinerariesID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const itineraryItemsByItinerariesID = /* GraphQL */ `
  query ItineraryItemsByItinerariesID(
    $itinerariesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelItineraryItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itineraryItemsByItinerariesID(
      itinerariesID: $itinerariesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Type
        Name
        Location
        Date_and_Time
        Duration
        Notes
        itinerariesID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getItineraries = /* GraphQL */ `
  query GetItineraries($id: ID!) {
    getItineraries(id: $id) {
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
export const listItineraries = /* GraphQL */ `
  query ListItineraries(
    $filter: ModelItinerariesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItineraries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Description
        Creation_DateTime
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFlights = /* GraphQL */ `
  query GetFlights($id: ID!) {
    getFlights(id: $id) {
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
export const listFlights = /* GraphQL */ `
  query ListFlights(
    $filter: ModelFlightsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const flightsByItineraryitemsID = /* GraphQL */ `
  query FlightsByItineraryitemsID(
    $itineraryitemsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFlightsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    flightsByItineraryitemsID(
      itineraryitemsID: $itineraryitemsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
