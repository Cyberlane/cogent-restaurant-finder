import { useParams } from '@tanstack/react-router';

const DetailsPage = () => {
  const params = useParams({ from: '/$id' });
  return <div>TODO: {params.id}</div>;
};

export default DetailsPage;
