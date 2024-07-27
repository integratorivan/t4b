import { Container } from './parts/container';
import { Content } from './parts/content';
import { Header } from './parts/header';

export type Todos = { completed: false; id: 1; title: 'delectus aut autem'; userId: 1 };

const getData = async () => {
    const data: Todos = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();
    return data;
};

const Event = async () => {
    const data = await getData();

    return (
        <>
            <h2>1 приветик</h2>
            <button type="button">Привет, я ванек</button>
            <Container />
        </>
    );
};

export default Event;
