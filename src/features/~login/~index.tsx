import { Box, Button, Card, TextField } from '@mui/material';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { H1, PageContainer } from '@/components';
import handleAxiosError from '@/helpers/handle-axios-error';
import { useAuthStore } from '@/stores';
import { logger } from '@/utils/logger';

export const Route = createFileRoute('/login/')({
  beforeLoad: async ({ context }) => {
    if (context.authContext.isAuthenticated) {
      throw redirect({ to: '/home' });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { setIsAuthenticated } = useAuthStore();

  const login = (emoloyeeId: string, password: string) => {
    try {
      logger.info(emoloyeeId, password);
      setIsAuthenticated(true);
    } catch (error) {
      handleAxiosError(error, (message: string) => {
        toast.error(message);
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      employeeId: '',
      password: '',
    },
    validationSchema: Yup.object({
      employeeId: Yup.string().required('Vui lòng nhập mã số nhân viên!'),
      password: Yup.string().required('Vui lòng nhập mật khẩu!'),
    }),
    onSubmit: async (values, { resetForm }) => {
      // await login(values.email, values.password);
      login(values.employeeId, values.password);
      resetForm();
    },
  });

  return (
    <PageContainer contentCenter>
      <img
        alt="login background"
        src="/images/login-background.png"
        className="w-full h-full absolute z-0 bg-cover bg-center"
      />
      <Card className="p-6 flex w-[30rem] z-1">
        <Box
          component="form"
          autoComplete="off"
          sx={{ width: '100%' }}
          className="flex relative gap-4 flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <H1 className="mb-4">Login</H1>
          <TextField
            label="Employee ID"
            id="employeeId"
            required
            variant="outlined"
            sx={{ width: '100%' }}
            fullWidth
            value={formik.values.employeeId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.employeeId !== undefined}
            helperText={formik.errors.employeeId}
          />
          <TextField
            label="Password"
            id="password"
            required
            variant="outlined"
            type="password"
            sx={{ width: '100%' }}
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password !== undefined}
            helperText={formik.errors.password}
          />
          <Button
            type="submit"
            sx={{ width: '100%' }}
            variant="contained"
            disableElevation
          >
            Log in
          </Button>
        </Box>
      </Card>
    </PageContainer>
  );
}
