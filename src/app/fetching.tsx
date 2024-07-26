export const Fetching = async () => {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();

    console.log(data);

    return <div>1, {data.title}</div>;
};
