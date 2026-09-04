/** Orientational purchase cost ranges for Burgas coast (Stage 5). Not legal advice. */

export const COST_RATES = {
  /** Closing: municipal tax + notary + registry (approx % of price) */
  closingPctMin: 0.025,
  closingPctMax: 0.045,
  /** Extra first-year buffer beyond 12× monthly fee (utilities / winter) */
  yearBufferMinEur: 400,
  yearBufferMaxEur: 1200,
} as const;

export type CostEstimate = {
  priceEur: number;
  maintenanceEur: number;
  closingMin: number;
  closingMax: number;
  yearFeeTotal: number;
  yearMin: number;
  yearMax: number;
  cashAtCloseMin: number;
  cashAtCloseMax: number;
};

export function estimatePurchaseCosts(priceEur: number, maintenanceEur: number): CostEstimate {
  const price = Math.max(0, Math.round(Number.isFinite(priceEur) ? priceEur : 0));
  const fee = Math.max(0, Math.round(Number.isFinite(maintenanceEur) ? maintenanceEur : 0));
  const closingMin = Math.round(price * COST_RATES.closingPctMin);
  const closingMax = Math.round(price * COST_RATES.closingPctMax);
  const yearFeeTotal = fee * 12;
  const yearMin = yearFeeTotal + COST_RATES.yearBufferMinEur;
  const yearMax = yearFeeTotal + COST_RATES.yearBufferMaxEur;
  return {
    priceEur: price,
    maintenanceEur: fee,
    closingMin,
    closingMax,
    yearFeeTotal,
    yearMin,
    yearMax,
    cashAtCloseMin: price + closingMin,
    cashAtCloseMax: price + closingMax,
  };
}

export function formatPctRange() {
  const a = Math.round(COST_RATES.closingPctMin * 1000) / 10;
  const b = Math.round(COST_RATES.closingPctMax * 1000) / 10;
  return `${a}–${b}%`;
}
