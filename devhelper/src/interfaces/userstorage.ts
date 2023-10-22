import { User } from './user';

const USER_KEY = 'user_key';

export const saveUser = (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  };

export const getUser = (): User | null => {
    const userStr = localStorage.getItem(USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
};
export const clearUser = () => {
    localStorage.removeItem(USER_KEY)
};
