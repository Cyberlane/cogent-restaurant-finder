import { DateTimePicker } from '@mantine/dates';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRestaurantStore } from '../../store/useRestaurantStore';
import { formatFilterDate } from '../../utils/time';

const TimeSelect = () => {
  const { t } = useTranslation();
  const { setOpenSpecificTime, clearOpening } = useRestaurantStore();

  const onChange = useCallback(
    (date: string | null) => {
      if (date != null) {
        setOpenSpecificTime(formatFilterDate(date));
      } else {
        clearOpening();
      }
    },
    [setOpenSpecificTime, clearOpening],
  );

  return (
    <DateTimePicker
      clearable
      label={t('map.pick')}
      radius="md"
      w="50%"
      onChange={onChange}
    />
  );
};

export default TimeSelect;
