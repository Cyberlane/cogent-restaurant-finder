import { Paper } from '@mantine/core';

import type { Restaurant } from '../../types/foursquare.type';
import Meals from './Meals';
import Menu from './Menu';
import OpenNow from './OpenNow';
import OpeningHours from './OpeningHours';
import Payment from './Payment';
import Tastes from './Tastes';
import Website from './Website';

export type OverviewProps = {
  restaurant: Restaurant;
};

const Overview = ({ restaurant }: OverviewProps) => {
  return (
    <Paper>
      <Paper shadow="md" p="md" mb="md">
        <Tastes tastes={restaurant.tastes} />
      </Paper>
      <Paper shadow="md" p="md" mb="md">
        <Website website={restaurant.website} />
        <Menu menu={restaurant.menu} />
        <Payment payment={restaurant.features.payment} />
      </Paper>
      <Paper shadow="md" p="md" mb="md">
        <OpenNow isOpen={restaurant.hours.open_now} />
      </Paper>
      <Paper shadow="md" p="md" mb="md">
        <Meals meals={restaurant.features.food_and_drink.meals} />
      </Paper>
      <Paper shadow="md" p="md" mb="md">
        <OpeningHours openingHours={restaurant.hours.regular} />
      </Paper>
    </Paper>
  );
};

export default Overview;
