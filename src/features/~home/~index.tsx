import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { createFileRoute, redirect } from '@tanstack/react-router';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { PageContainer } from '@/components';
import handleAxiosError from '@/helpers/handle-axios-error';
import { GetLogsRes } from '@/services/logs';
import LogService from '@/services/logs/services';

import { StatusTag } from './components';

export const Route = createFileRoute('/home/')({
  beforeLoad: async ({ context }) => {
    if (!context.authContext.isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const [date, setDate] = useState<Dayjs>(dayjs(new Date().toISOString()));
  const [logs, setLogs] = useState<GetLogsRes>([]);

  const queryDate = useMemo(() => {
    return {
      year: String(date.year()).padStart(4, '0'),
      month: String(date.month() + 1).padStart(2, '0'),
      day: String(date.date()).padStart(2, '0'),
    };
  }, [date]);

  const getUsers = useCallback(async () => {
    try {
      // setLoading(true);
      const { data } = await LogService.getLogsByDate(queryDate);

      setLogs(data);
    } catch (error: unknown) {
      handleAxiosError(error, (message: string) => {
        toast.error(message);
      });
    } finally {
      // setLoading(false);
    }
  }, [queryDate]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <PageContainer hasHeader>
      <div className="w-full relative mt-20 flex justify-center flex-col gap-6">
        <div className="flex relative flex-row gap-4 items-center">
          <div className="font-bold">Date: </div>
          <DatePicker
            // label="Controlled picker"
            value={date}
            onChange={(newValue) => {
              if (newValue) setDate(newValue);
            }}
          />
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Check-in time</TableCell>
                <TableCell>Check-out time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logs.map((log) => {
                return (
                  <TableRow key={log._id}>
                    <TableCell>{dayjs(date).format('DD/MM/YYYY')}</TableCell>
                    <TableCell>{log.Name}</TableCell>
                    <TableCell>
                      <StatusTag
                        _time1={log['Clock In']}
                        _time2={log['Clock Out']}
                      />
                    </TableCell>
                    <TableCell>{log['Clock In']}</TableCell>
                    <TableCell>{log['Clock Out']}</TableCell>
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
