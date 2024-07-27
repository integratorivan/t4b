'use client';

import { useActionState, useState } from 'react';
import { reatomAsync } from '@reatom/framework';
import { reatomComponent } from '@reatom/npm-react';

import { userAtom } from '$/app/model/user';

export const getData = reatomAsync((ctx) => {
    const id = Math.floor(Math.random() * 199) + 1;

    return ctx.schedule(async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
            res.json(),
        );
        userAtom(ctx, data);
    });
});

export const Content = reatomComponent(({ctx}) => {
    return (
        <div>
            <h3>Content</h3>
            <p>
                User: {ctx.spy(userAtom)?.title}, id: {ctx.get(userAtom)?.id}
            </p>
            <button
                type="button"
                onClick={() => {
                    return getData(ctx);
                }}
            >
                Обновить юзера
            </button>
        </div>
    );
});
