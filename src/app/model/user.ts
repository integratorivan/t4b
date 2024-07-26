import { atom } from '@reatom/core';

export const userAtom = atom(null, 'userAtom');

userAtom.onChange((ctx, newState) => console.log(newState));
