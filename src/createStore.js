//let state;

function createStore(reducer) {
  let state;
  //state is now accessible to dispatch

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return { dispatch, getState };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

//dispatch({ type: "@@INIT" });
let store = createStore(reducer); // createStore takes the reducer as an argument
store.dispatch({ type: "@@INIT" });

let button = document.getElementById("button");

button.addEventListener("click", function () {
  store.dispatch({ type: "counter/increment" });
});
