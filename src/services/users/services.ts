import { API_URL } from '@/config/env';
import axios from '@/utils/custom-axios';

import { GetUsersRes } from '.';

const url = `${API_URL}/user`;

const UserService = {
  getUsers: async () => {
    return await axios.get<GetUsersRes>(`${url}`);
  },
};

export default UserService;
