// import {useState, useEffect} from "react";

// const LocalStorage = (key, initialState) => {
//     const [state, setState] = useState(
//         () => JSON.parse(window.localStorage.getItem(key)) || initialState
//     );

//     useEffect(()=>{
//         window.localStorage.setItem(key, JSON.stringify(state));
//     },[key, state]);
    
//     return [state, setState]
// }
// export default LocalStorage;