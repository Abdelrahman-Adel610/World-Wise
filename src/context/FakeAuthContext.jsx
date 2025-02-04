import { createContext, useContext, useReducer } from "react";

const initialState = { user: {}, isAuthorized: false };
const FAKE_USER = {
  name: "Abdo",
  email: "jack@example.com",
  password: "qwerty",
  avatar:
    "https://avatars.githubusercontent.com/u/149705123?s=400&u=102303d8878dd15db85b564ae792e70023432882&v=4",
};
const FakeAuthContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthorized: true, user: action.payload };
    case "logout":
      return { ...state, isAuthorized: false, user: {} };
  }
}
// eslint-disable-next-line react/prop-types
export function FakeAuthProvider({ children }) {
  const [{ user, isAuthorized }, dispatch] = useReducer(reducer, initialState);
  function login(user) {
    if (user.email === FAKE_USER.email && user.password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <FakeAuthContext.Provider value={{ login, logout, user, isAuthorized }}>
      {children}
    </FakeAuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(FakeAuthContext);
}
