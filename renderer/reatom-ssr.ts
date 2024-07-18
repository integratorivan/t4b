import { createMemStorage, reatomPersist } from "@reatom/persist";

const ssrStorage = createMemStorage({ name: "ssr", subscribe: false });
export const { snapshotAtom } = ssrStorage;
export const withSsr = reatomPersist(ssrStorage);
