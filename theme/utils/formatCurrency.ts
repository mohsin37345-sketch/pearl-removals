/**
 * Format numeric value as British Pounds (GBP)
 */
export function formatCurrency(amount: number, includePence = false): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: includePence ? 2 : 0,
    maximumFractionDigits: includePence ? 2 : 0
  }).format(amount);
}
