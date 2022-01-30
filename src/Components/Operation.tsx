import React from "react";
import { Forms } from "./Forms";

export const Operations: React.FC<any> = (props) => {
    return <>
        <Forms operationType="sum" />
        <Forms operationType="sub" />
        <Forms operationType="multi" />
        <Forms operationType="div" />
    </>
}