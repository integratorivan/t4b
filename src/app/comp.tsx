import { reatomComponent } from '@reatom/npm-react';
import Link from 'next/link';

import { atoms } from './page';

export const Button = reatomComponent(({ ctx }) => {
    return (
        <div>
            <button onClick={() => atoms(ctx, (ab) => ab + 1)}>Button</button>
            <Link href="/event">Привет</Link>
        </div>
    );
});
