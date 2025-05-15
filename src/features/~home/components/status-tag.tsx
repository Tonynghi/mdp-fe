import { useMemo } from 'react';

import { Tag } from '@/components';
import { getTimeDiff } from '@/utils/time';

type StatusTagProps = {
  _time1: string;
  _time2: string;
};

const StatusTag = ({ _time1, _time2 }: StatusTagProps) => {
  const statusConfig = useMemo(() => {
    const diff = getTimeDiff(_time1, _time2);

    const eightHoursMs = 8 * 60 * 60 * 1000;

    if (diff >= eightHoursMs)
      return {
        label: 'Valid',
        backgroundColor: '#b4ffb3',
        textColor: '#00730b',
      };

    return {
      label: 'Invalid',
      backgroundColor: '#ffccc7',
      textColor: '#610900',
    };
  }, [_time1, _time2]);

  return <Tag {...statusConfig} />;
};

export default StatusTag;
