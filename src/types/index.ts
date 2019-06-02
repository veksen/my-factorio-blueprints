export type FilterType = "STATE" | "CATEGORY"

export type State = "EARLY_GAME" | "MID_GAME" | "LATE_GAME"
export type Category = "BALANCER" | "SMELTING" | "TRAINS" | "PRODUCTION"

export interface BuildI {
  blueprint: string
  name: string
  state: State
  categories: Category[]
}
