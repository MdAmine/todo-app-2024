import {useState} from "react";

const TodoAdd = (props) => {
    const [inputValue, setInputValue] = useState("");
    const hundleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const hundleSubmit = (event) => {
        event.preventDefault();
        props.onAdd(inputValue);
        setInputValue('');
    }
    return (
        <>
            <form className="add text-center my-4" onSubmit={hundleSubmit}>
                <label htmlFor="add" className="add text-light">
                    Add a new todo:
                </label>
                <input
                    type="text"
                    className="form-control m-auto"
                    name="add"
                    id="add"
                    value={inputValue}
                    onChange={hundleInputChange}
                />
            </form>
        </>
    );
};

export default TodoAdd;
