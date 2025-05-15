import dayjs from 'dayjs';

function haveSameDate(
  _date1: dayjs.ConfigType,
  _date2: dayjs.ConfigType,
): boolean {
  const date1 = dayjs(_date1);
  const date2 = dayjs(_date2);
  return date1.format('MM DD YYYY') === date2.format('MM DD YYYY');
}

function getTimeDiff(_date1: dayjs.ConfigType, _date2: dayjs.ConfigType) {
  const format = 'HH:mm:ss';
  const start = dayjs(_date1, format);
  const end = dayjs(_date2, format);

  // Calculate the difference
  const diff = end.diff(start);

  return diff;
}

export { haveSameDate, getTimeDiff };
