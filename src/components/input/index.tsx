import React from "react"
import { Input } from "antd"
import { InputProps } from "antd/lib/input"
import { mergeClass } from "@/utils"
import "./style.css"

export function BaseInput({ className, ...rest }: InputProps) {
    return <Input className={mergeClass("base-input", className)} {...rest} />
}
