import { Badge, Paper } from '@mantine/core';

export type TastesProps = {
  tastes: string[];
};

const Tastes = ({ tastes }: TastesProps) => {
  if (tastes.length === 0) {
    return null;
  }
  return (
    <Paper shadow="md" p="md" mb="md">
      {tastes.map((taste) => (
        <Badge size="md" m={2} color="grape" key={`taste-${taste}`}>
          {taste}
        </Badge>
      ))}
    </Paper>
  );
};

export default Tastes;
