import { ReactNode } from "react";
import { H_TAG_VARIANT } from "./Htag.enum";

export interface IHTagProps {
	tag: H_TAG_VARIANT;
	children: ReactNode
}