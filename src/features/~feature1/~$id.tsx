import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/feature1/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return (
    <div>Hello "/feature1/$some-id"! The parameters of this route is {id}</div>
  );
}
