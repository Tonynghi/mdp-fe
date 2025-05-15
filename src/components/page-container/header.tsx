import { Button } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { toast } from 'react-toastify';

import handleAxiosError from '@/helpers/handle-axios-error';
import { useAuthStore, useUserStore } from '@/stores';
import storage from '@/utils/storage';

const Header = () => {
  const { setToken, setIsAuthenticated } = useAuthStore();
  const { setUser } = useUserStore();

  const logout = () => {
    try {
      storage.removeItem('token');
      setIsAuthenticated(false);
      setToken('');
      setUser(null);
    } catch (error) {
      handleAxiosError(error, (message: string) => {
        toast.error(message);
      });
    }
  };

  return (
    <div className="sticky items-center top-0 w-full h-20 flex flex-row justify-between px-20 bg-white drop-shadow-lg">
      <Link to="/" className="flex relative flex-row gap-6 font-black">
        ATTENDANCE MANAGEMENT SYSTEM
      </Link>
      <div className="flex relative flex-row font-bold gap-4 items-center">
        <Link to="/users" className="hover:text-black duration-200 ease-in-out">
          Users
        </Link>
      </div>
      <Button onClick={logout} variant="contained" disableElevation>
        Log out
      </Button>
    </div>
  );
};

export default Header;
