import { NavLink } from "react-router";
import Swal from "sweetalert2";

const CoffeCard = ({ coffe, coffies, setCoffies }) => {
    const { _id, name, suplier, taste, details, photourl } = coffe;
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffe-server-roan.vercel.app/coffe/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffies.filter(cof => cof._id !== id);
                            setCoffies(remaining);
                        }
                    })
            }
        });
    };
    return (
        <div>
            <div className="card card-side bg-green-200 text-black shadow-sm  p-4">
                <figure>
                    <img src={photourl} alt="coffe" className="h-48 object-contain" />
                </figure>
                <div className="flex justify-around w-full pr-4 items-center">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>{details}</p>
                        <p>{suplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end ">
                        <div className="flex flex-col items-end gap-3">
                            <button className="btn btn-primary w-14">View</button>
                            <NavLink to={`/updatecoffe/${_id}`}><button className="btn btn-primary w-14">Update</button></NavLink>
                            <button onClick={() => handleDelete(_id)} className="btn btn-primary w-14">X</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoffeCard;