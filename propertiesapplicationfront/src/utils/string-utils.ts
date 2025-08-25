export function capitalizeLocations(text: string): string {
  return text
    .split(' ')
    .map((word) => {
      if (word.length === 0) {
        return ''; 
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

export function capitalizeTitle(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}