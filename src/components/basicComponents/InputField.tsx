import { useState } from "react";

interface InputFieldProps {
	label: string;
	type: "text" | "number" | "password" | "email";
	id?: string;
	placeholder?: string;
	small?: string;
	spacingClass?: string;
	onChange: (value: string) => void;
}

const InputField = ({
	label,
	spacingClass = "mb-3",
	small,
	type,
	id,
	placeholder,
	onChange,
}: InputFieldProps) => {
	const [value, setValue] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		onChange(event.target.value);
	};

	return (
		<>
			<div className={spacingClass}>
				<label htmlFor={id} className="form-label">
					{label}
				</label>
				<input
					type={type}
					className="form-control"
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
				></input>
				<small>{small}</small>
			</div>
		</>
	);
};

export default InputField;
