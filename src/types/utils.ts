export type EventTypedTarget<E extends Event, Target extends Element> = E & {
  target: Target
}
