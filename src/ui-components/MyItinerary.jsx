/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function MyItinerary(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1444px"
      height="1473px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MyItinerary")}
      {...rest}
    >
      <View
        width="1444px"
        height="1473px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <View
        width="1281px"
        height="556px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="524px"
        left="81px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Map")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="1300px"
        height="77px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="381px"
        left="93px"
        {...getOverrideProps(overrides, "From Group")}
      >
        <View
          width="1300px"
          height="77px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="25px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 5")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="45px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="89px"
          height="43px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="22.08%"
          bottom="22.08%"
          left="1.54%"
          right="91.62%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="FROM"
          {...getOverrideProps(overrides, "FROM")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1300px"
        height="77px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="281px"
        left="93px"
        {...getOverrideProps(overrides, "To Group")}
      >
        <View
          width="1300px"
          height="77px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="25px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "Rectangle 4")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="45px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="52px"
          height="46px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="19.48%"
          bottom="20.78%"
          left="1.54%"
          right="94.46%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="TO"
          {...getOverrideProps(overrides, "TO")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="45px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="459px"
        height="60px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="13.44%"
        bottom="82.48%"
        left="6.44%"
        right="61.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Trip to Dallas"
        {...getOverrideProps(overrides, "Trip to Dallas")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="500"
        color="rgba(9,0,0,1)"
        lineHeight="72px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="459px"
        height="90px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2.85%"
        bottom="91.04%"
        left="6.44%"
        right="61.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="My Itinerary"
        {...getOverrideProps(overrides, "My Itinerary")}
      ></Text>
    </View>
  );
}
