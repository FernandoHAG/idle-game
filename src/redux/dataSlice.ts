import { createSlice } from "@reduxjs/toolkit";

const initialNextLevel = 10;
const initialLevel = 1;
const initialXp = 0;
const xpNextLevelMultiplier = 2;

export const enum PlayerStatus {
  social = "social",
}

export enum statusType {
  social = "social",
  strength = "strength",
  agility = "agility",
  intelligence = "intelligence",
  faith = "faith",
  luck = "luck",
  poisonResistance = "poisonResistance",
}

export type PlayerStatusType = {
  [key in statusType]: {
    xp: number;
    level: number;
    nextLevel: number;
  };
};

const initialState = {
  playerStatus: {
    social: {
      xp: initialXp,
      level: initialLevel,
      nextLevel: initialNextLevel,
    },
  },
};

export const slice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    increaseStatusXp(state, { payload }) {
      if (!state.playerStatus[payload.status as keyof typeof PlayerStatus])
        return;
      const { xp, level, nextLevel } =
        state.playerStatus[payload.status as keyof typeof PlayerStatus];
      let newXp = xp + payload.value;
      let newLevelNessessaryExp = nextLevel;
      let newLevel = level;

      if (newXp >= nextLevel) {
        newLevelNessessaryExp = newLevelNessessaryExp * xpNextLevelMultiplier;
        newXp = 0;
        newLevel = level + 1;
      }

      return {
        ...state,
        playerStatus: {
          social: {
            xp: newXp,
            level: newLevel,
            nextLevel: newLevelNessessaryExp,
          },
        },
      };
    },
  },
});

export const { increaseStatusXp } = slice.actions;
export default slice.reducer;
