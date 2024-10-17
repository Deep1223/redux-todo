import { createStore } from "redux";

const helloworlddata = {
    message: "hello world"
}

const helloworld = (state = helloworlddata, action) => {
    switch (action.type) {
        default: 
        return state;
    }
}

const Store = createStore(helloworld);

export default Store;