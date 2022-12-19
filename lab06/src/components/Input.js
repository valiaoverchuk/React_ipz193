export default function Input({ name, register, caption, units, ...props }) {
    return (
        <>
            <label htmlFor={name}>{caption}</label>
            <input {...register(name)} {...props} />
            <span>{units}  </span>
        </>
    );
};