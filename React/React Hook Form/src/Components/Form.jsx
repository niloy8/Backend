import { useForm } from "react-hook-form"

const Form = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (d) => {
        console.log(d)
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("firstName")} />
                <input type="text" {...register("lastName")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Form;