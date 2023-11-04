/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<FlexProps>;
    top?: PrimitiveOverrideProps<FlexProps>;
    col124?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector128?: PrimitiveOverrideProps<IconProps>;
    Vector129?: PrimitiveOverrideProps<IconProps>;
    Vector1210?: PrimitiveOverrideProps<IconProps>;
    Vector1211?: PrimitiveOverrideProps<IconProps>;
    Vector1213?: PrimitiveOverrideProps<IconProps>;
    Vector1215?: PrimitiveOverrideProps<IconProps>;
    Vector1217?: PrimitiveOverrideProps<IconProps>;
    Vector1218?: PrimitiveOverrideProps<IconProps>;
    Vector1219?: PrimitiveOverrideProps<IconProps>;
    Vector1220?: PrimitiveOverrideProps<IconProps>;
    Vector1221?: PrimitiveOverrideProps<IconProps>;
    Vector1222?: PrimitiveOverrideProps<IconProps>;
    Vector1223?: PrimitiveOverrideProps<IconProps>;
    Vector1224?: PrimitiveOverrideProps<IconProps>;
    Vector1225?: PrimitiveOverrideProps<IconProps>;
    Vector1226?: PrimitiveOverrideProps<IconProps>;
    Vector1229?: PrimitiveOverrideProps<IconProps>;
    FlyFare?: PrimitiveOverrideProps<TextProps>;
    col1232?: PrimitiveOverrideProps<FlexProps>;
    info?: PrimitiveOverrideProps<FlexProps>;
    SITE?: PrimitiveOverrideProps<TextProps>;
    list1235?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Track Flight"?: PrimitiveOverrideProps<TextProps>;
    "My Itinerary"?: PrimitiveOverrideProps<TextProps>;
    "Flight Status"?: PrimitiveOverrideProps<TextProps>;
    about?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    list1242?: PrimitiveOverrideProps<FlexProps>;
    Blog?: PrimitiveOverrideProps<TextProps>;
    "About us"?: PrimitiveOverrideProps<TextProps>;
    bottom?: PrimitiveOverrideProps<FlexProps>;
    "\u00A9 2023 \u2014 Copyright"?: PrimitiveOverrideProps<TextProps>;
    socialMedia?: PrimitiveOverrideProps<FlexProps>;
    "icons8-github 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector1255?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
