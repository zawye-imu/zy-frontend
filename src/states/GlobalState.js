import { hookstate } from "@hookstate/core";

const globalState = hookstate({
    counter: 0, 
    name: "zero"
});

export {
    globalState
}