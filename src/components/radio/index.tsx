import React from "react"
import { Radio } from "antd"
import { RadioProps } from "antd/lib/radio"
import { mergeClass } from "@/utils"
import "./style.css"

export function BaseRadio({ className, children, ...rest }: RadioProps) {
    return (
        <Radio className={mergeClass("base-radio", className)} {...rest}>
            {children}
        </Radio>
    )
}
