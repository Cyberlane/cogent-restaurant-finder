import { ActionIcon } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { IconRestore } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useRestaurantStore } from '../../store/useRestaurantStore';
import { formatFilterDate } from '../../utils/time';

const defaultDate = dayjs().format('YYYY-MM-DDHH:mm');

const FilterTimeOfWeek = () => {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState(
    dayjs().format('YYYY-MM-DDHH:mm'),
  );
  const { setOpenSpecificTime, clearOpening } = useRestaurantStore();

  const onChange = useCallback(
    (date: string | null) => {
      console.log({ date });
      if (date != null) {
        setCurrentTime(date);
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
      onChange={onChange}
      value={currentTime}
      rightSection={
        <ActionIcon
          onClick={() => {
            setCurrentTime(dayjs().format('YYYY-MM-DDHH:mm'));
          }}
        >
          <IconRestore />
        </ActionIcon>
      }
    />
  );
};

export default FilterTimeOfWeek;
