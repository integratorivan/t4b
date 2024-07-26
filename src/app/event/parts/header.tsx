import type { FC } from 'react';
import { reatomComponent } from '@reatom/npm-react';

import { userAtom } from '$/app/model/user';

import type { Todos } from '../page';

export const Header: FC<{ data: Todos }> = reatomComponent(({ ctx }) => {
    return (
        <div style={{ background: 'red' }}>
            <h1>Header</h1>
            <pre>{ctx.spy(userAtom)?.title}</pre>
        </div>
    );
});
