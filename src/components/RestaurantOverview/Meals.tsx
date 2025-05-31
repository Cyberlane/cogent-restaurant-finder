import { Table } from '@mantine/core';
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

  return (
    <Table>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>{t('overview.meals.barSnacks')}</Table.Td>
          <Table.Td>
            <Icon value={meals.bar_snacks} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{t('overview.meals.breakfast')}</Table.Td>
          <Table.Td>
            <Icon value={meals.breakfast} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{t('overview.meals.brunch')}</Table.Td>
          <Table.Td>
            <Icon value={meals.brunch} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{t('overview.meals.dessert')}</Table.Td>
          <Table.Td>
            <Icon value={meals.dessert} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{t('overview.meals.dinner')}</Table.Td>
          <Table.Td>
            <Icon value={meals.dinner} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{t('overview.meals.happyHour')}</Table.Td>
          <Table.Td>
            <Icon value={meals.happy_hour} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{t('overview.meals.lunch')}</Table.Td>
          <Table.Td>
            <Icon value={meals.lunch} />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>{t('overview.meals.tastingMenu')}</Table.Td>
          <Table.Td>
            <Icon value={meals.tasting_menu} />
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};

export default Meals;
