import { useAuth } from "../context/AuthContext";

const useAuthStatus = () => {
  const { currentUser } = useAuth();
  return { isAuthenticated: !!currentUser, currentUser };
};

export default useAuthStatus;