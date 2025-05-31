import { Badge } from '@mantine/core';

export type TastesProps = {
  tastes: string[];
};

const Tastes = ({ tastes }: TastesProps) => {
  return (
    <div>
      {tastes.map((taste) => (
        <Badge size="md" m={2} color="grape" key={`taste-${taste}`}>
          {taste}
        </Badge>
      ))}
    </div>
  );
};

export default Tastes;
