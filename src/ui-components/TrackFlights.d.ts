/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrackFlightsOverridesProps = {
    TrackFlights?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Search Flights"?: PrimitiveOverrideProps<FlexProps>;
    "Choose Destination"?: PrimitiveOverrideProps<ViewProps>;
    "Show Destination"?: PrimitiveOverrideProps<TextProps>;
    Dates2863?: PrimitiveOverrideProps<ViewProps>;
    Dates2864?: PrimitiveOverrideProps<TextProps>;
    "10/5/23 - 10/9/23"?: PrimitiveOverrideProps<TextProps>;
    "traveler\\s"?: PrimitiveOverrideProps<ViewProps>;
    Travellers?: PrimitiveOverrideProps<TextProps>;
    "2 Travelers"?: PrimitiveOverrideProps<TextProps>;
    "search button"?: PrimitiveOverrideProps<FlexProps>;
    Search?: PrimitiveOverrideProps<TextProps>;
    "To Group2899"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "8:30PM-10:30PM2897"?: PrimitiveOverrideProps<TextProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
    DFW2892?: PrimitiveOverrideProps<TextProps>;
    From?: PrimitiveOverrideProps<TextProps>;
    "To Group2898"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "8:30PM-10:30PM2896"?: PrimitiveOverrideProps<TextProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    DFW2890?: PrimitiveOverrideProps<TextProps>;
    To?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TrackFlightsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TrackFlightsOverridesProps | undefined | null;
}>;
export default function TrackFlights(props: TrackFlightsProps): React.ReactElement;
