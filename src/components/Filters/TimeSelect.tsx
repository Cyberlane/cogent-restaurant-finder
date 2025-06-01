import { DateTimePicker } from '@mantine/dates';
import { useCallback } from 'react';
import { useRestaurantStore } from '../../store/useRestaurantStore';
import { formatFilterDate } from '../../utils/time';

const TimeSelect = () => {
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
      label="Pick a date and time"
      placeholder="Placeholder text"
      radius="md"
      w="50%"
      onChange={onChange}
    />
  );
};

export default TimeSelect;
