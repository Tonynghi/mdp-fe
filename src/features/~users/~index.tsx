import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { PageContainer } from '@/components';
import handleAxiosError from '@/helpers/handle-axios-error';
import { GetUsersRes } from '@/services';
import UserService from '@/services/users/services';

export const Route = createFileRoute('/users/')({
  beforeLoad: async ({ context }) => {
    if (!context.authContext.isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const [users, setUsers] = useState<GetUsersRes>([]);

  const getUsers = useCallback(async () => {
    try {
      // setLoading(true);
      const { data } = await UserService.getUsers();

      setUsers(data);
    } catch (error: unknown) {
      handleAxiosError(error, (message: string) => {
        toast.error(message);
      });
    } finally {
      // setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <PageContainer hasHeader>
      <div className="w-full relative mt-20 flex justify-center">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Employee ID</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => {
                return (
                  <TableRow key={user._id}>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.employeeId}</TableCell>
                    <TableCell>{user.role.toUpperCase()}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </PageContainer>
  );
}
