/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo21289?: PrimitiveOverrideProps<FlexProps>;
    Logo21499?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector21502?: PrimitiveOverrideProps<IconProps>;
    Vector21503?: PrimitiveOverrideProps<IconProps>;
    Vector21504?: PrimitiveOverrideProps<IconProps>;
    Vector21505?: PrimitiveOverrideProps<IconProps>;
    Vector21507?: PrimitiveOverrideProps<IconProps>;
    Vector21509?: PrimitiveOverrideProps<IconProps>;
    Vector21511?: PrimitiveOverrideProps<IconProps>;
    Vector21512?: PrimitiveOverrideProps<IconProps>;
    Vector21513?: PrimitiveOverrideProps<IconProps>;
    Vector21514?: PrimitiveOverrideProps<IconProps>;
    Vector21515?: PrimitiveOverrideProps<IconProps>;
    Vector21516?: PrimitiveOverrideProps<IconProps>;
    Vector21517?: PrimitiveOverrideProps<IconProps>;
    Vector21518?: PrimitiveOverrideProps<IconProps>;
    Vector21519?: PrimitiveOverrideProps<IconProps>;
    Vector21520?: PrimitiveOverrideProps<IconProps>;
    Vector21523?: PrimitiveOverrideProps<IconProps>;
    FlyFare?: PrimitiveOverrideProps<TextProps>;
    "Frame 32121292"?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    Track?: PrimitiveOverrideProps<TextProps>;
    "My Itinerary"?: PrimitiveOverrideProps<TextProps>;
    "Flight Status"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32121297"?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector21300?: PrimitiveOverrideProps<IconProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
