

export const DiceRollState = {
    AT_RIGHT: 'RIGHT',
    AT_LEFT: 'LEFT',
    ROLLING_TO_LEFT: 'ROLLING_TO_LEFT',
    ROLLING_TO_RIGHT: 'ROLLING_TO_RIGHT',
}

export type DiceState = {
  value: number,
  rollState: string,
};
