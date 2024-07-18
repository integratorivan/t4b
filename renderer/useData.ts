// https://vike.dev/useData
import { usePageContext } from "./usePageContext";

/** https://vike.dev/useData */
export const useData = <Data>() => {
  const { data } = usePageContext();

  return data as Data;
};
