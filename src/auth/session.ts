// Synthetic placeholder used only to give the DiffBeacon consumer smoke a file on an
// authentication-shaped path. It performs no real authentication and holds no real secret.
export function isAllowed(role: string): boolean {
  return role === "reader";
}
