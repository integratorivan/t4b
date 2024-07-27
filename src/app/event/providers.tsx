'use client';

import { reatomComponent } from '@reatom/npm-react';

import { atomTitle } from '../page';

export const Providers = reatomComponent(({ ctx, params, children }) => {
    atomTitle(ctx, params.title);
    return <>{children}</>;
});
