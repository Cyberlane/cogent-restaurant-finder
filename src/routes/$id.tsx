import { createFileRoute } from '@tanstack/react-router';
import DetailsPage from '../pages/Details';

export const Route = createFileRoute('/$id')({
  component: DetailsPage,
});
