import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/algorithms/_layout/data-structures')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/algorithms/_layout/data-structures"!</div>
}
