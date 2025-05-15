import { API_URL } from '@/config/env';
import axios from '@/utils/custom-axios';

import { GetLogsReq, GetLogsRes } from '.';

const url = `${API_URL}/raw-log`;

const LogService = {
  getLogsByDate: async (getLogsReq: GetLogsReq) => {
    const { year, month, day } = getLogsReq;

    return await axios.get<GetLogsRes>(`${url}/${year}/${month}/${day}`);
  },
};

export default LogService;
