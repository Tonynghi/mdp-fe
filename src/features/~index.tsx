import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad: async ({ context }) => {
    if (!context.authContext.isAuthenticated) {
      throw redirect({ to: '/login' });
    } else throw redirect({ to: '/home' });
  },
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
