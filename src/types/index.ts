import React from "react";

export interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export type ChildrenProps = {
  children: React.ReactElement;
};