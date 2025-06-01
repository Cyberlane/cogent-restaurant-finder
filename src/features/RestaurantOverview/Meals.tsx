import { Paper, Table } from '@mantine/core';
import { IconCancel, IconCheck } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

import type { Meals as MealsType } from '../../types/foursquare.type';

export type MealsProps = {
  meals: MealsType | undefined;
};

const Icon = ({ value }: { value: boolean }) => {
  return value ? <IconCheck color="green" /> : <IconCancel color="red" />;
};

const Meals = ({ meals }: MealsProps) => {
  const { t } = useTranslation();

  if (meals == null) {
    return null;
  }

  const tables = [
    { key: 'overview.meals.barSnacks', value: meals.bar_snacks },
    { key: 'overview.meals.breakfast', value: meals.breakfast },
    { key: 'overview.meals.brunch', value: meals.brunch },
    { key: 'overview.meals.dessert', value: meals.dessert },
    { key: 'overview.meals.dinner', value: meals.dinner },
    { key: 'overview.meals.happyHour', value: meals.happy_hour },
    { key: 'overview.meals.lunch', value: meals.lunch },
    { key: 'overview.meals.tastingMenu', value: meals.tasting_menu },
  ];

  return (
    <Paper shadow="md" p="md" mb="md">
      <Table>
        <Table.Tbody>
          {tables.map((row) => (
            <Table.Tr key={row.key}>
              <Table.Td>{t(row.key)}</Table.Td>
              <Table.Td>
                <Icon value={row.value} />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
};

export default Meals;
