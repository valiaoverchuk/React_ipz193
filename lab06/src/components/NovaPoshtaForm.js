import {useForm} from "react-hook-form";
import * as yup from "yup";
import Place from "./Place";
import Input from "./Input";
import {useYupValidationResolver} from "../hooks/useYupValidationResolver";
import {defaultPlaceValue, cities, cargoTypes, packageTypes, backDeliveryTypes} from "../constants";

const schema = yup.object({
    senderCity: yup.string().required(),
    recipientCity: yup.string().required(),
    cargoType: yup.string().required(),
    places: yup.array().of(yup.object().shape({
        count: yup.number().min(1),
        cost: yup.number().min(1),
        weight: yup.number().min(1),
        length: yup.number().min(1),
        width: yup.number().min(1),
        height: yup.number().min(1),
        packing: yup.string()
    })).required(),
    isPacking: yup.bool(),
    floorCountAsc: yup.string(),
    elevatorAsc: yup.bool(),
    isBackDelivery: yup.bool(),
});

export default function NovaPoshtaForm() {
    const resolver = useYupValidationResolver(schema);

    const {register, handleSubmit, control, watch} = useForm({
        defaultValues: {
            places: [
                defaultPlaceValue
            ],
        }, resolver
    });
    const isBackDelivery = watch("isBackDelivery");

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <span>Маршрут</span>
                <div>
                    <label htmlFor='senderCity'>Місто-відправник</label>
                    <select {...register('senderCity')}>
                        {cities.map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                    <label htmlFor='recipientCity'>Місто-одержувач</label>
                    <select {...register('recipientCity')}>
                        {cities.map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor='cargoType'>Вид відправлення</label>
                <select {...register('cargoType')}>
                    {cargoTypes.map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>

            </div>
            <div>
                <Input type="checkbox" name="isPacking" register={register} caption='Послуга "Пакування"'/>
            </div>
            <Place name="places" register={register} control={control} watch={watch} packageTypes={packageTypes}/>
            <div>
                <Input type="number" name="floorCountAsc" register={register} caption='Послуга "Підйом на поверх"'/>
                <Input type="checkbox" name="elevatorAsc" register={register} caption='Ліфт'/>
            </div>
            <div>
                <Input type="checkbox" name="isBackDelivery" register={register} caption='Послуга "Зворотна доставка"'/>
            </div>
            {isBackDelivery &&
            <div>
                <label htmlFor='backDeliveryTypes'>Вид зворотної доставки</label>
                <select {...register('backDeliveryTypes')}>
                    {backDeliveryTypes.map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>

            </div>
            }
            <input type="submit" key="submit" value="Реалізувати"/>
            <input type="reset" key="reset" value="Очистити"/>
        </form>
    )
}
