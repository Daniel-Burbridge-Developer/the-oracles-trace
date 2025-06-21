import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/algorithms/_layout/graph')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/algorithms/_layout/graph"!</div>
}
