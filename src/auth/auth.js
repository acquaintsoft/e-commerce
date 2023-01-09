import { createContext, useContext, useReducer } from "react";

/** Store */
const initialState = JSON.parse(localStorage.getItem("token1"));

const AuthContext = createContext(initialState);

export function reducer(state, action) {
  switch (action.type) {
    case "login":
      return JSON.parse(localStorage.getItem("token1"));
    case "logout":
      localStorage.removeItem("token1");
      return JSON.parse(localStorage.getItem("token1"));
    default:
      throw new Error();
  }
}

/** Auth Provider */
export function AuthProvider({ children }) {
  const [authed, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={[authed, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}

/**Own Auth Consumer hook */
export default function AuthConsumer() {
  return useContext(AuthContext);
}
