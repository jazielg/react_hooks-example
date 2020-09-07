import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
  useContext,
  useReducer,
} from "react";
import PostItem from "./PostItem";
import Input from "./Input";
import { AuthContext } from "../context/AuthContextProvider";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const PostList = () => {
  const [name, setName] = useState("");

  // UseRef
  const nameRef = useRef(null);

  // UseContext
  const authContext = useContext(AuthContext);

  // UseReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // useCallback
  const fetchData = useCallback((type = "users") => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  // UseEffect
  useEffect(() => {
    // useRef, focus no campo name ao carregar a página.
    nameRef.current.focus();

    fetchData();
  }, [fetchData]);

  // UseMemo - Elemento não será criado a cada renderização
  const arrayData = useMemo(() => {
    return ["Post1", "Post2", "Post3"];
  }, []);

  return (
    <div>
      <button onClick={() => authContext.setUser("Test3")}>
        Call authContext.setUser
      </button>
      <p>{authContext.user.name}</p>

      <form>
        <Input
          ref={nameRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <button onClick={() => dispatch({ type: "increment" })}> + </button>
      <p>{state.count}</p>

      <PostItem arrayData={arrayData} fetchData={fetchData} />
    </div>
  );
};

export default PostList;
