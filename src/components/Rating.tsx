import { Rating as MantineRating } from '@mantine/core';

export type RatingProps = {
  rating: number | undefined;
};

const Rating = ({ rating }: RatingProps) => {
  return <MantineRating value={(rating ?? 0) / 2} fractions={5} readOnly />;
};

export default Rating;
