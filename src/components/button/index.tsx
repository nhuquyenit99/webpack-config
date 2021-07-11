import React from "react"
import { Button } from "antd"
import { ButtonProps } from "antd/lib/button"
import { mergeClass } from "@/utils"
import "./style.css"

export type ButtonType = ButtonProps & {
    buttonType?: "primary" | "secondary"
}

export function BaseButton({
    children,
    className,
    buttonType,
    ...rest
}: ButtonType) {
    return (
        <Button
            {...rest}
            className={mergeClass("base-button", buttonType, className)}
        >
            {children}
        </Button>
    )
}
