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
      <Tastes tastes={tastes} />
      <Website website={restaurant.website} />
      <Payment payment={restaurant.features?.payment} />
      <OpenNow isOpen={restaurant.hours.open_now} />
      <Meals meals={meals} />
      <OpeningHours openingHours={regularHours} />
    </Paper>
  );
};

export default Overview;
