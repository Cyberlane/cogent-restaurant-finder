import { Paper } from '@mantine/core';

import type { Restaurant } from '../../types/foursquare.type';
import Meals from './Meals';
import OpenNow from './OpenNow';
import OpeningHours from './OpeningHours';
import Payment from './Payment';
import Tastes from './Tastes';
import Website from './Website';

export type OverviewProps = {
  restaurant: Restaurant;
};

const Overview = ({ restaurant }: OverviewProps) => {
  const tastes = restaurant.tastes ?? [];
  const meals = restaurant.features?.food_and_drink?.meals;
  const regularHours = restaurant.hours?.regular ?? [];
  return (
    <Paper>
      {tastes.length > 0 ? (
        <Paper shadow="md" p="md" mb="md">
          <Tastes tastes={tastes} />
        </Paper>
      ) : null}
      <Paper shadow="md" p="md" mb="md">
        <Website website={restaurant.website} />
      </Paper>
      <Paper shadow="md" p="md" mb="md">
        <Payment payment={restaurant.features?.payment} />
      </Paper>
      <Paper shadow="md" p="md" mb="md">
        <OpenNow isOpen={restaurant.hours.open_now} />
      </Paper>
      {meals != null ? (
        <Paper shadow="md" p="md" mb="md">
          <Meals meals={meals} />
        </Paper>
      ) : null}
      {regularHours.length > 0 ? (
        <Paper shadow="md" p="md" mb="md">
          <OpeningHours openingHours={regularHours} />
        </Paper>
      ) : null}
    </Paper>
  );
};

export default Overview;
