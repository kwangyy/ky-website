/** Shared so Hero's cascade starts exactly when the typewriter finishes. */
export const NAME = "I'm Kwang Yang"

export const POP_DURATION = 860
export const TYPE_START = 700
export const PER_CHAR = 52

export const TYPE_END = TYPE_START + NAME.length * PER_CHAR
/** Seconds, for framer-motion delays. */
export const REST_START = (TYPE_END + 140) / 1000
