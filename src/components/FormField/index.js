import React from "react";

function FormField({ label, type, name, value, onChange }) {
    const InputType = type === "textarea" ? "textarea" : "input";

    return (
        <div>
            <label>
                {label}:
                <InputType type={type} name={name} value={value} onChange={onChange} />
            </label>
        </div>
    );
}

export default FormField;
