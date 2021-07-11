import React from "react"
import { Checkbox } from "antd"
import { CheckboxProps } from "antd/lib/checkbox"
import { mergeClass } from "@/utils"
import "./style.css"

export function BaseCheckbox({
    className,
    children,
    value,
    ...rest
}: CheckboxProps) {
    return (
        <Checkbox className={mergeClass("base-checkbox", className)} {...rest}>
            {children}
        </Checkbox>
    )
}
