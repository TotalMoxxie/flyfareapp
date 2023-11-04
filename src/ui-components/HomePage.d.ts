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
export declare type HomePageOverridesProps = {
    HomePage?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ImageProps>;
    Center24144?: PrimitiveOverrideProps<FlexProps>;
    "Choose Destination24145"?: PrimitiveOverrideProps<ViewProps>;
    "Choose Destination24147"?: PrimitiveOverrideProps<TextProps>;
    Dates24148?: PrimitiveOverrideProps<ViewProps>;
    Dates24149?: PrimitiveOverrideProps<TextProps>;
    "10/5/23 - 10/9/2324150"?: PrimitiveOverrideProps<TextProps>;
    "traveler\\s24151"?: PrimitiveOverrideProps<ViewProps>;
    Travellers24152?: PrimitiveOverrideProps<TextProps>;
    "2 Travelers24153"?: PrimitiveOverrideProps<TextProps>;
    "search button24154"?: PrimitiveOverrideProps<FlexProps>;
    Search24155?: PrimitiveOverrideProps<TextProps>;
    Center2872?: PrimitiveOverrideProps<FlexProps>;
    "Choose Destination2873"?: PrimitiveOverrideProps<ViewProps>;
    "Choose Destination2874"?: PrimitiveOverrideProps<TextProps>;
    Dates2875?: PrimitiveOverrideProps<ViewProps>;
    Dates2876?: PrimitiveOverrideProps<TextProps>;
    "10/5/23 - 10/9/232877"?: PrimitiveOverrideProps<TextProps>;
    "traveler\\s2878"?: PrimitiveOverrideProps<ViewProps>;
    Travellers2879?: PrimitiveOverrideProps<TextProps>;
    "2 Travelers2880"?: PrimitiveOverrideProps<TextProps>;
    "search button2881"?: PrimitiveOverrideProps<FlexProps>;
    Search2882?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomePageOverridesProps | undefined | null;
}>;
export default function HomePage(props: HomePageProps): React.ReactElement;
