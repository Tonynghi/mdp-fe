import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/feature1/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/feature1/"!</div>;
}
