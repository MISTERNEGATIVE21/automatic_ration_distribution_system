import { createContext, useState } from "react";

export const RationContext = createContext();

export const RationContextProvider = ({ children }) => {
    const [loggedInDetails, setLoggedInDetails] = useState();
    const [personalDetails, setPersonalDetails] = useState();
    const [familyMembersDetails, setFamilyMembersDetails] = useState([]);
    
    return (
        <RationContext.Provider value={{ personalDetails, setPersonalDetails, familyMembersDetails, setFamilyMembersDetails, loggedInDetails, setLoggedInDetails }} >
            {children}
        </RationContext.Provider>
    )
}