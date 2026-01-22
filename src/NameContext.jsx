import React, { createContext, useState } from 'react';
export const NameContext = createContext();
export const NameProvider = ({ children }) => {
    const [name, setName] = useState("Abhiram"); 
    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    );
};
//consume data using the (useContext)
//provide the data using the {.Provider}