import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider, createRouter } from '@tanstack/react-router';
// import { useCallback, useEffect } from 'react';
import {
  // toast,
  ToastContainer,
} from 'react-toastify';

// import handleAxiosError from '@/helpers/handle-axios-error';
import { routeTree } from '@/routeTree.gen';
import { useAuthStore } from '@/stores';
// import { logger } from '@/utils/logger';

import 'react-toastify/dist/ReactToastify.css';

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    authContext: { isAuthenticated: false },
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const AppRouter = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <RouterProvider
      router={router}
      context={{ authContext: { isAuthenticated } }}
    />
  );
};

const theme = createTheme({
  palette: {
    primary: {
      light: '#cae9fa',
      main: '#17adff',
      dark: '#006ba6',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => {
  // const { isAuthenticated } = useAuthStore();
  // const { setUser } = useUserStore();
  // const { setGlobalLoading } = useGlobalLoadingStore();

  // const getProfile = useCallback(async () => {
  //   try {
  //     setGlobalLoading(true);
  //     const { data } = await UserService.getUserProfile();
  //     setUser(data);
  //   } catch (error: unknown) {
  //     setIsAuthenticated(false);
  //     handleAxiosError(error, (message: string) => {
  //       toast.error(message);
  //     });
  //   } finally {
  //     setGlobalLoading(false);
  //   }
  // }, [setUser, setGlobalLoading, setIsAuthenticated]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     reloadBalance();
  //     getProfile();
  //   }
  // }, [isAuthenticated, getProfile, reloadBalance]);

  return (
    // <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <AppRouter />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ThemeProvider>
    </LocalizationProvider>
    // </GoogleOAuthProvider>
  );
};

export default App;
