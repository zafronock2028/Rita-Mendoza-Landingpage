// Motion OS — single source of truth for reduce-motion + easing tokens.
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const EASE = {
  editorial: 'power4.out',
  sharp: 'power3.inOut',
}

export const DUR = {
  reveal: 1.0,
  hover: 0.28,
}
