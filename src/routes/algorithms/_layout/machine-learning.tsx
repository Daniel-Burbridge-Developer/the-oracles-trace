import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/algorithms/_layout/machine-learning')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/algorithms/_layout/machine-learning"!</div>
}
