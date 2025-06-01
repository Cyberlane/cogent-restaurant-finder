import { Paper, Table } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import type { RegularHours } from '../../types/foursquare.type';
import HourRow from './OpeningHours.Row';

export type OpeningHoursProps = {
  openingHours: RegularHours[];
};

const OpeningHours = ({ openingHours }: OpeningHoursProps) => {
  const { t } = useTranslation();
  if (openingHours.length === 0) {
    return null;
  }
  return (
    <Paper shadow="md" p="md" mb="md">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{t('overview.dayOfWeek')}</Table.Th>
            <Table.Th>{t('overview.openingTime')}</Table.Th>
            <Table.Th>{t('overview.closingTime')}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {openingHours.map((d) => (
            <HourRow key={`opening-hours-${d.day}-${d.open}`} day={d} />
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
};

export default OpeningHours;
