import { hookstate, useHookstate } from "@hookstate/core";
import { devtools } from "@hookstate/devtools";

const mainState = hookstate({
    isEditable: false,
    name: "zaw zaw"
},devtools({key:"main"}));


// wrapper function
export function useMainState() {
    const state = useHookstate(mainState);
    

    return ({
        get isEditable() {
            return state.isEditable.get()
        },
        toogleIsEditable(){
            return state.isEditable.set(p=>  !p)
        }
    })
}

