import react from 'react';
const Form=()=>{
    const fun=()=>{
        console.log("Form Submitted");
    }
    return(
        <>
        <h1>Student Registration Form</h1>
        <form onSubmit={fun}>
            <label>Name: </label>
            <input type="text" placeholder="Enter your Name"></input>
            <br />
            <br />
            <label>Roll Number:  </label>
            <input type="number"></input>
             <br />
            <br />
            <label>Age:  </label>
            <input type="number" placeholder="Age"></input>
             <br />
            <br />
            <label>Department: </label>
            <select>
                <option>Choose Department</option>
                <option>IT</option>
                <option>CSE</option>
                <option>Mech</option>
                <option>Civil</option>
                <option>AIML</option>
            </select>
             <br />
            <br />
            <label>Gender: </label>
            <input type="radio"></input>
            <label>Female</label>
            <input type="radio"></input>
            <label>Male</label>
            <input type="radio"></input>
            <label>Other</label>
             <br />
            <br />
            <label>Phone Number:</label>
            <input type="number"></input>
             <br />
            <br />
            <button>Submit</button>
        </form>

        </>
    );
}
export default Form;