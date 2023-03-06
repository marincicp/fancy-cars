import { createContext, useContext } from "react";
import { rootStore } from "../stores/RootStore";

const RootStoreContext = createContext();

export function RootStoreContexProvider({ children }) {
  const { carsStore, commentsStore } = rootStore;

  const storesToShare = { carsStore, commentsStore };

  return (
    <RootStoreContext.Provider value={storesToShare}>
      {children}
    </RootStoreContext.Provider>
  );
}

export function useStores() {
  return useContext(RootStoreContext);
}
