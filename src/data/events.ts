export interface Event {
  title: string;
  date?: Date;
  location: string;
  description: string;
  url?: string;
}

/**
 * Get the next Nth occurrence of a weekday in a future month
 * @param targetWeekday - Day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 * @param occurrence - Which occurrence (1 = first, 2 = second, 3 = third, 4 = fourth)
 * @param hour - Hour of day (0-23)
 * @param minute - Minute (0-59)
 * @returns Date object for the next Nth occurrence of that weekday
 */
function getNextNthWeekday(
  targetWeekday: number,
  occurrence: number = 1,
  hour: number = 0,
  minute: number = 0
): Date {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();

  // Try current month and next few months until we find a future Nth weekday
  for (let i = 0; i < 12; i++) {
    const firstOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Calculate days until first occurrence of target weekday
    const daysUntilFirstWeekday = (targetWeekday - dayOfWeek + 7) % 7;

    // Calculate the Nth occurrence by adding (occurrence - 1) weeks
    const daysUntilNthWeekday = daysUntilFirstWeekday + (occurrence - 1) * 7;

    const nthWeekday = new Date(
      year,
      month,
      1 + daysUntilNthWeekday,
      hour,
      minute,
      0
    );

    // Make sure the date is still in the same month (e.g., there might not be a 5th Tuesday)
    if (nthWeekday.getMonth() !== month) {
      // Skip to next month
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
      continue;
    }

    // If this Nth weekday is in the future, return it
    if (nthWeekday > now) {
      return nthWeekday;
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
    title: "Nevada Meshup - MeshEnvy Launch Event",
    date: new Date("2025-10-21T18:00:00"),
    location: "Whitney Peak Hotel, 3500 South Virginia Street, Reno, NV 89502",
    description:
      "The official launch of the MeshEnvy project, bringing together mesh networking enthusiasts.",
  },
  //   {
  //     title: "Monthly Mesh Meetup - Reno",
  //     date: getNextNthWeekday(2, 3, 18, 0), // 1st Thursday at 6:00 PM
  //     location: "Whitney Peak Hotel, 3500 South Virginia Street, Reno, NV 89502",
  //     description:
  //       "Monthly gathering for Meshtastic enthusiasts in the Reno area. Happens the third Tuesday of each month at 6:00 PM. Bring your devices, share projects, and connect with the community.",
  //   },
  {
    title: "Desert Mesh Test - Black Rock Desert",
    location: "Black Rock Desert Playa",
    description: `Long-range testing event on the playa. We'll be testing node placement and signal propagation across the desert.`,
  },
];
