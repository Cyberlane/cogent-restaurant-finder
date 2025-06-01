import { Table } from '@mantine/core';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { RegularHours } from '../../types/foursquare.type';
import { formatTime } from '../../utils/time';

type HourRowProps = {
  day: RegularHours;
};

const HourRow = ({ day }: HourRowProps) => {
  const { i18n } = useTranslation();
  const [dayOfWeek, setDayOfWeek] = useState<string>(
    dayjs('2024-01-01')
      .add(day.day - 1, 'day')
      .format('dddd'),
  );

  useEffect(() => {
    dayjs.locale(i18n.language);
    setDayOfWeek(
      dayjs('2024-01-01')
        .add(day.day - 1, 'day')
        .format('dddd'),
    );
  }, [i18n.language, day]);

  return (
    <Table.Tr key={`opening-hours-${day.day}`}>
      <Table.Td>{dayOfWeek}</Table.Td>
      <Table.Td>{formatTime(day.open)}</Table.Td>
      <Table.Td>{formatTime(day.close)}</Table.Td>
    </Table.Tr>
  );
};

export default HourRow;
