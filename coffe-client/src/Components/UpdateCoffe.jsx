import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
    const coffe = useLoaderData()
    const { _id, name, quantity, suplier, taste, cetagory, details, photourl } = coffe;

    const handleAddCoffe = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const quantity = e.target.quantity.value
        const suplier = e.target.suplier.value
        const taste = e.target.taste.value
        const details = e.target.details.value
        const cetagory = e.target.cetagory.value
        const photourl = e.target.photourl.value
        const updateCoffe = { name, quantity, suplier, taste, cetagory, details, photourl }
        console.log(updateCoffe)
        fetch(`https://coffe-server-roan.vercel.app/coffe/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateCoffe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };
    return (
        <div className="bg-[#F4F3F0] text-black p-24">
            <h1 className="text-center mt-4 text-3xl  text-emerald-700">Update your Coffe</h1>
            <form onSubmit={handleAddCoffe}>
                <div className="md:flex gap-1.5 ml-3.5 ">
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend  text-black">Name</legend>
                        <input type="text" name="name" defaultValue={name} className="input text-white w-full" placeholder="Coffe Name" />

                    </fieldset>
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend  text-black">Quantity</legend>
                        <input type="text" name="quantity" defaultValue={quantity} className="input text-white w-full" placeholder="Coffe Quantity" />

                    </fieldset>
                </div>
                <div className="md:flex gap-1.5 ml-3.5 ">
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend  text-black">Supplier</legend>
                        <input type="text" name="suplier" defaultValue={suplier} className="input text-white w-full" placeholder="Coffe Supplier" />

                    </fieldset>
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend  text-black">Coffe Taste</legend>
                        <input type="text" name="taste" defaultValue={taste} className="input text-white w-full" placeholder="Coffe Taste" />

                    </fieldset>
                </div>
                <div className="md:flex gap-1.5 ml-3.5 ">
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend  text-black">Cetagory</legend>
                        <input type="text" name="cetagory" defaultValue={cetagory} className="input text-white w-full" placeholder="Coffe Cetagory" />

                    </fieldset>
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend  text-black">Details</legend>
                        <input type="text" name="details" defaultValue={details} className="input text-white w-full" placeholder="Coffe Details" />

                    </fieldset>
                </div>
                <div className="md:flex gap-1.5 ml-3.5 ">
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend  text-black">Photo URL</legend>
                        <input type="text" name="photourl" defaultValue={photourl} className="input text-white w-full" placeholder="Photo URL" />

                    </fieldset>
                </div>
                <div className="md:flex gap-1.5 ml-3.5 mt-4"> <input type="submit" className="btn btn-block" value="Update Coffe" /></div>
            </form>

        </div>
    );
};

export default UpdateCoffe;