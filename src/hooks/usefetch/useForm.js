import { useState } from "react"

const UseForm = (initValue) => {
    const [formData, setFormData] = useState(initValue);

    const handlerInput = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    }

    const handlerReset = () => {
        setFormData({});
    }

    return { handlerInput, handlerReset, formData };
}