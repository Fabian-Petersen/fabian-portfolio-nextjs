// $ Note: Form Row Input Flowbite component
// $ For the peer element to work, the label element must be a sibling of the input element after the input element.

type FormRowInputProps = {
  type: string;
  name: string;
  id: string;
  labelText: string;
  placeholderText: string;
  className: string;
  defaultValues?: string;
  onChange: () => void;
  required?: boolean;
};

const FormRowInput = ({
  id,
  type,
  name,
  labelText,
  placeholderText,
  className,
  defaultValues,
  onChange,
  required,
}: FormRowInputProps) => {
  return (
    <div className="relative w-full mb-2 group">
      <input
        id={id}
        type={type}
        name={name}
        className={`${className} text-sm py-3 px-2 peer
          outline-none border-none focus:border-b-rose-600 text-gray-700 rounded-md
          w-full placeholder-transparent dark:text-white`}
        defaultValue={defaultValues}
        onChange={onChange}
        required={required}
        placeholder={placeholderText}
      ></input>
      {labelText && (
        <label
          htmlFor={name}
          className="absolute text-sm -top-5 left-0 transition-all duration-400 text-gray-400
            peer-placeholder-shown:top-3 px-2 mb-0 peer-placeholder-shown:text-gray-600
            peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm tracking-wider
            "
        >
          {labelText}
        </label>
      )}
    </div>
  );
};

export default FormRowInput;
