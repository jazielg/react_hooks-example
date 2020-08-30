import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import PostItem from "./PostItem";
import Input from "./Input";

const PostList = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);

  const nameRef = useRef(null);

  const fetchData = useCallback((type = "users") => {
    return fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  useEffect(() => {
    // useRef, focus no campo name ao carregar a página.
    nameRef.current.focus();

    // callback
    fetchData();
  }, [fetchData]);

  /* Executa apenas uma vez ao iniciar a página; 
    sem o useMemo, esse elemento será criado a cada alteração no estado (renderizando o elemento pai,
    e ele será redenrizado novamente.
  */
  const arrayData = useMemo(() => {
    return ["Post1", "Post2", "Post3"];
  }, []);

  return (
    <div>
      <form>
        <Input
          ref={nameRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <button onClick={() => setCounter(counter + 1)}>Add counter</button>
      <p>{counter}</p>

      <PostItem arrayData={arrayData} fetchData={fetchData} />
    </div>
  );
};

export default PostList;
