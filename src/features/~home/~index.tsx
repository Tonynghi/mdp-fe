import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/home/')({
  beforeLoad: async ({ context }) => {
    if (!context.authContext.isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home/"!</div>;
}
