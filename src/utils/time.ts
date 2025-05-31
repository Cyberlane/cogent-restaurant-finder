// Expects string in the format of "HHmm"
// Returns in the format of "HH:mm"
export const formatTime = (time: string): string => {
  return time.replace(/(\d{2})(\d{2})/, (_, hours, minutes) => {
    return `${hours}:${minutes}`;
  });
};
