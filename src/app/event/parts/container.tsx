'use client';

import { useState } from 'react';

import { Content } from './content';
import { Header } from './header';

export const Container = () => {
    const [state, setState] = useState(0);
    return (
        <>
            <button onClick={() => setState(state + 1)}>click, {state}</button>
            <Header />
            <Content />
        </>
    );
};
