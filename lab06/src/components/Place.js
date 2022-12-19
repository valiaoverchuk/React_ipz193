import Input from "./Input";
import {useFieldArray} from "react-hook-form";
import {defaultPlaceValue} from "../constants";

export default function Place(props) {
    const {control, name, packageTypes, register, watch} = props;
    const {fields, append, remove} = useFieldArray({name: 'places', control});
    const isPacking = watch('isPacking');

    return (
        <div className="places">
            {fields.map(({id, count, price, weight, length, width, height}, index) => (
                <div key={id}>
                    <Input type="number" name={`${name}.${index}.count`} defaultValue={count} register={register}
                           caption='Кількість'/>
                    <Input type="number" name={`${name}.${index}.cost`} defaultValue={price} register={register}
                           caption='Оголошена вартість' units='грн'/>
                    <Input type="number" name={`${name}.${index}.weight`} defaultValue={weight} register={register}
                           caption='Вага' units='кг'/>
                    <Input type="number" name={`${name}.${index}.length`} defaultValue={length} register={register}
                           caption='Довжина' units='см'/>
                    <Input type="number" name={`${name}.${index}.width`} defaultValue={width} register={register}
                           caption='Ширина' units='см'/>
                    <Input type="number" name={`${name}.${index}.height`} defaultValue={height} register={register}
                           caption='Висота' units='см'/>
                    {fields.length > 1 && <button type="button" onClick={() => remove(index)}>x</button>}
                </div>
            ))}
            <button type="button" onClick={() => append(defaultPlaceValue)}>
                Додати місце
            </button>
            {isPacking && fields.map((field, index) => {
                const count = watch(`places.${index}.count`);
                return (
                    <div key={field.id}>
                        <label htmlFor={`${name}.${index}.packing`}>Вид пакування</label>
                        <select {...register(`${name}.${index}.packing`)}>
                            {packageTypes.map((value) => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </select>

                        <span>Кількість: {count}</span>
                    </div>
                )
            })}
        </div>
    )
};