import react from 'react';
const Department=()=>{
    return(
        <>
        <form>
            <label>Department:   </label>
            <select>
                <option value="Select">Select</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
                <option value="IT">IT</option>
            </select>
            </form>
            </>
    );
}
export default Department;