import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/algorithms/_layout/compression')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/algorithms/_layout/compression"!</div>
}
