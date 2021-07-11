import { mergeClass } from "@/utils"
import React from "react"
import * as ContentMap from "./content-map.json"
import "./style.css"

const IconContentMap = { ...ContentMap }

type IconName = keyof typeof IconContentMap
type IconProps = {
    name: IconName
    className?: string
    color?: string
    size?: number
    onClick?: () => void
}

export function Icon({ name, className, color, size, onClick }: IconProps) {
    return (
        <span
            className={mergeClass("icon", name, className)}
            onClick={onClick}
            style={
                color || size
                    ? {
                          color: color ?? undefined,
                          fontSize: size ? `${size}px` : undefined
                      }
                    : undefined
            }
        />
    )
}
