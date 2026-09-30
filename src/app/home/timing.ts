// Shared hero animation timing (plain module so server + client files can import it)
export const HEADLINE_LINES = ["Earn more from the", "rooms you already have."];
export const LINE_DURATION = 1.1;
export const LINE_STAGGER = 0.7;

// Supporting content starts just before the last headline line finishes wiping in
export const HERO_CONTENT_DELAY =
  LINE_STAGGER * (HEADLINE_LINES.length - 1) + LINE_DURATION * 0.75;
