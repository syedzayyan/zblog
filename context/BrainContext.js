import React, { createContext, useState } from "react";

export const BrainContext = createContext(null);

const BrainContextProvider = (props) => {
    const [brainState, setBrainState] = useState("brain");
    return(
        <BrainContext.Provider value = {[brainState, setBrainState]}>
            {props.children}
        </BrainContext.Provider>
    )
}

export default BrainContextProvider