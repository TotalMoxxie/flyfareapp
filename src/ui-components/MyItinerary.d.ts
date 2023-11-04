/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MyItineraryOverridesProps = {
    MyItinerary?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Map?: PrimitiveOverrideProps<ViewProps>;
    "From Group"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    FROM?: PrimitiveOverrideProps<TextProps>;
    "To Group"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    TO?: PrimitiveOverrideProps<TextProps>;
    "Trip to Dallas"?: PrimitiveOverrideProps<TextProps>;
    "My Itinerary"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MyItineraryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MyItineraryOverridesProps | undefined | null;
}>;
export default function MyItinerary(props: MyItineraryProps): React.ReactElement;
