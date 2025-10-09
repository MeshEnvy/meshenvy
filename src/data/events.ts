export interface Event {
  title: string;
  date: Date;
  location: string;
  description: string;
  url?: string;
}

/**
 * Get the next first occurrence of a weekday in a future month
 * @param targetWeekday - Day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 * @param hour - Hour of day (0-23)
 * @param minute - Minute (0-59)
 * @returns Date object for the next first occurrence of that weekday
 */
function getNextFirstWeekday(
  targetWeekday: number,
  hour: number = 0,
  minute: number = 0
): Date {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();

  // Try current month and next few months until we find a future first weekday
  for (let i = 0; i < 12; i++) {
    const firstOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Calculate days until target weekday (0-6)
    const daysUntilWeekday = (targetWeekday - dayOfWeek + 7) % 7;

    const firstWeekday = new Date(
      year,
      month,
      1 + daysUntilWeekday,
      hour,
      minute,
      0
    );

    // If this first weekday is in the future, return it
    if (firstWeekday > now) {
      return firstWeekday;
    }

    // Move to next month
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
  }

  // Fallback (should never reach here)
  return new Date(year, month, 1, hour, minute, 0);
}

export const eventsData: Event[] = [
  {
    title: "Monthly Mesh Meetup - Reno",
    date: getNextFirstWeekday(4, 18, 0), // Thursday at 6:00 PM
    location: "The Reno Collective, 525 E 9th St, Reno, NV 89512",
    description:
      "Monthly gathering for Meshtastic enthusiasts in the Reno area. Happens the first Thursday of each month at 6:00 PM. Bring your devices, share projects, and connect with the community.",
  },
  {
    title: "Desert Mesh Test - Black Rock Desert",
    date: new Date("2025-10-25T10:00:00"),
    location: "Black Rock Desert Playa",
    description: `Long-range testing event on the playa. We'll be testing node placement and signal propagation across the desert.`,
  },
  {
    title: "Nevada Mesh Launch Event",
    date: new Date("2025-09-15T14:00:00"),
    location: "Reno, NV",
    description:
      "The official launch of the MeshEnvy project, bringing together mesh networking enthusiasts.",
  },
];
