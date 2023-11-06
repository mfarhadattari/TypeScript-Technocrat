{
  // ----------------->> Asynchronous TypeScript ----------------->>
  // basic promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Something is wrong");
      }
    });
  };

  const runPromise = async () => {
    const data: string = await createPromise();
    return data;
  };

  //   runPromise();

  interface ToDo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }

  // fetching
  const getToDo = async (): Promise<ToDo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
    return data;
  };

  getToDo();
}
