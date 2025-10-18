

export const DiceRollState = {
  AT_RIGHT: 'AT_RIGHT',
  AT_LEFT: 'AT_LEFT',
  ROLLING_TO_LEFT: 'ROLLING_TO_LEFT',
  ROLLING_TO_RIGHT: 'ROLLING_TO_RIGHT',
}

export type DiceState = {
  value: number,
  rollState: string,
};


export const StyleAction: {[key: string]: string} = {
  'ROLLING_TO_LEFT': 'move-dice-right-left',
  'ROLLING_TO_RIGHT': 'move-dice-left-right',
  'AT_LEFT': 'at-left',
  'AT_RIGHT': 'at-right'
}