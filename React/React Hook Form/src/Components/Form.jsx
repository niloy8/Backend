import { useForm } from "react-hook-form"

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();



    const onSubmit = async (d) => {

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(d)
        console.log("Submission finished");
    };


    return (
        <div>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("firstName")} required />
                {errors.firstName && <span>First name is required</span>}
                <input type="text" {...register("lastName")} />
                <input
                    type="submit"
                    value={isSubmitting ? "Submitting..." : "Submit"}
                    disabled={isSubmitting}
                />
            </form>
        </div>
    );
};

export default Form;