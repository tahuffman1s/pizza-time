import type { Guid } from "guid-typescript";

export type app = {
  name: string;
  id: Guid;
  imagePath: string;
  componentPath: string;
};
