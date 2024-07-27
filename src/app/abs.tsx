'use client';

import { useEffect } from 'react';
import { createCtx } from '@reatom/core';
import { reatomContext } from '@reatom/npm-react';

import { atoms } from './page';

const ctx = createCtx();

export const Reatom = ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { completed: false; id: 1; title: 'delectus aut autem'; userId: 1 };
}) => {
    useEffect(() => {
        const getData = async () => {
            const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();

            console.log(data);
        };

        getData();
    }, []);

    console.log('sjnckjasndjkas');

    atoms(ctx, params.title);
    return <reatomContext.Provider value={ctx}>{children}</reatomContext.Provider>;
};
