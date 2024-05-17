import { getUser, removeUser, saveUser } from "./authStorage";

export const isAuthenticated = () => {
    const currentUser = getUser();
    return currentUser !== null && currentUser.username !== null;
};

export const loginUser = (user) => {
    saveUser(user);
};

export const logoutUser = () => {
    removeUser();
};