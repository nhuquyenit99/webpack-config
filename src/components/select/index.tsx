import React from "react"
import { Select } from "antd"
import { SelectProps, SelectValue } from "antd/lib/select"
import { mergeClass } from "@/utils"
import "./style.css"

export function BaseSelect({ className, ...rest }: SelectProps<SelectValue>) {
    return (
        <Select
            className={mergeClass("base-select", className)}
            showArrow={false}
            dropdownClassName={mergeClass(
                "base-dropdown",
                rest.dropdownClassName
            )}
            {...rest}
        />
    )
}
