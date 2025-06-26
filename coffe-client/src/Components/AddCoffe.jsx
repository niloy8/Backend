
const AddCoffe = () => {
    return (
        <div>
            <h1 className="text-center mt-4">Add</h1>
            <div className="flex gap-1.5 ml-3.5">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" className="input" placeholder="Coffe Name" />

                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Chef</legend>
                    <input type="text" className="input" placeholder="Coffe chef" />

                </fieldset>
            </div>
        </div>
    );
};

export default AddCoffe;