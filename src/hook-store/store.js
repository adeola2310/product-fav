import React, {useEffect, useState} from "react";

// managing our global state
let globalState = {}

let listener = [];

let actions = {}


// lets create a custom hook
export const useStore = ()=>{
   const setState =  useState(globalState)[1];

   const dispatch = (actionIdentifier, payload) => {
       const newState = actions[actionIdentifier](globalState, payload);
       globalState = {...globalState, ...newState};


       for(const listen of listener){
           listen(globalState)
       }
   }

   useEffect( ()=>{
       listener.push(setState);

       return ()=>{
           listener = listener.filter(li => li !== setState);
       }
   }, [setState]);

   return [globalState, dispatch];
}

export const initStore = (userActions, initialState) => {
    if (initialState){
        globalState = {...globalState, ...initialState};
    }

    actions = { ...actions, ...userActions};
}
