export const guards = ["Guard1", "The guard man"];

export function addGuard(guard) {
  guards.push(guard);
  return guards;
}

addGuard("Guardian");

// export default {
//   guards,
//   addGuard,
// };
