import { DateTimePicker } from '@mantine/dates';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useRestaurantStore } from '../../store/useRestaurantStore';
import { formatFilterDate } from '../../utils/time';

const defaultDate = dayjs().format('YYYY-MM-DDHH:mm');

const TimeSelect = () => {
  const { t } = useTranslation();
  const { setOpenSpecificTime, clearOpening } = useRestaurantStore();

  const onChange = useCallback(
    (date: string | null) => {
      console.log({ date });
      if (date != null) {
        setOpenSpecificTime(formatFilterDate(date));
      } else {
        clearOpening();
      }
    },
    [setOpenSpecificTime, clearOpening],
  );

  useEffect(() => {
    setOpenSpecificTime(formatFilterDate(defaultDate));
  }, [setOpenSpecificTime]);

  return (
    <DateTimePicker
      label={t('map.pick')}
      radius="md"
      w="50%"
      defaultValue={defaultDate}
      onChange={onChange}
    />
  );
};

export default TimeSelect;
