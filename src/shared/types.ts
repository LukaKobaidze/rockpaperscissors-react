export type Gamemode = 'RockPaperScissors' | 'RockPaperScissorsLizardSpock';

export const rockPaperScissorsButtons = ['rock', 'paper', 'scissors'] as const;

export const rockPaperScissorsLizardSpockButtons = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
] as const;

export type GameButtons = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

export type Result = 'win' | 'lose' | 'tie';
