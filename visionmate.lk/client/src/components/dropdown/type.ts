import {ReactNode} from "react";

export interface PropTypes {
    placement: "bottomRight" | "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "top" | "bottom" | undefined,
    title?: string,
    trigger?: any,
    content?: ReactNode,
    children?: ReactNode,
    style?: object,
    className?: string,
}