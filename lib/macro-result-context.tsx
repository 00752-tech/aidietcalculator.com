import { createContext, useContext } from "react"

export interface MacroResult {
  protein: number;
  carbs: number;
  fat: number;
}

export type MacroResultContextType = {
  result: MacroResult | null;
  setResult: React.Dispatch<React.SetStateAction<MacroResult | null>>;
};

export const MacroResultContext = createContext<MacroResultContextType | undefined>(undefined);

export function useMacroResult() {
  const context = useContext(MacroResultContext);
  if (!context) {
    throw new Error("useMacroResult must be used within a MacroResultProvider");
  }
  return context;
}
