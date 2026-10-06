// Synthetic second runtime file so the consumer smoke has more than one implementation path.
export const MAX_IN_FLIGHT = 8;

export function slotCount(requests: number): number {
  return Math.min(requests, MAX_IN_FLIGHT);
}
