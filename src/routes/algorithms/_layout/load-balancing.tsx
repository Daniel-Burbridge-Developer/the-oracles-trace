import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/algorithms/_layout/load-balancing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/algorithms/_layout/load-balancing"!</div>
}
