import { Card, Skeleton } from '@mantine/core';

const indexes = Array.from({ length: 10 }, (_, idx) => idx.toString());

const SkeletonItem = () => {
  return (
    <Card>
      <Skeleton height={50} />
      <Skeleton height={20} mt={10} />
      <Skeleton height={160} mt={10} />
    </Card>
  );
};

const SearchResultSkeleton = () => {
  return (
    <>
      {indexes.map((idx) => (
        <SkeletonItem key={idx} />
      ))}
    </>
  );
};

export default SearchResultSkeleton;
