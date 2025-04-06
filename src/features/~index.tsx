import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello World! This is the start of the project. Use the link{' '}
      <div className="font-bold">http://localhost:3000/feature1</div> to
      navigate to subroute feature1
    </div>
  );
}
