import React from "react"
import {
    BaseButton,
    BaseCheckbox,
    BaseInput,
    BaseRadio,
    BaseSelect,
    Icon
} from "@/components"
import {} from "antd"

function App() {
    return (
        <div className="App">
            <h1>Icon</h1>
            <Icon name="icon-chevron-down" size={24} color="blue" />
            <h1>Button</h1>
            <BaseButton buttonType="primary">Filter</BaseButton>
            <BaseButton buttonType="secondary">Add</BaseButton>
            <h1>CheckBox</h1>
            <div>
                <BaseCheckbox>This is an unchecked checkbox</BaseCheckbox>
            </div>
            <div>
                <BaseCheckbox checked>This is a checked checkbox</BaseCheckbox>
            </div>
            <div>
                <BaseCheckbox disabled>
                    This is a disabled checkbox
                </BaseCheckbox>
            </div>
            <h1>Radio</h1>
            <div>
                <BaseRadio>This is an unchecked radio</BaseRadio>
            </div>
            <div>
                <BaseRadio checked>This is a checked radio</BaseRadio>
            </div>
            <div>
                <BaseRadio disabled>This is a disabled radio</BaseRadio>
            </div>
            <h1>Select</h1>
            <BaseSelect
                style={{ width: "200px" }}
                placeholder="Select an option"
                options={[
                    {
                        value: "1",
                        label: "first option"
                    },
                    {
                        value: "2",
                        label: "second option"
                    },
                    {
                        value: "3",
                        label: "third option"
                    }
                ]}
            ></BaseSelect>
            <h1>Input</h1>
            <BaseInput placeholder="Enter something" />
        </div>
    )
}

export default App
