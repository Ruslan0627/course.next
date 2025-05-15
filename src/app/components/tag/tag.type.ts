import React, { DetailsHTMLAttributes } from "react";
import { TAG_SIZE, TAG_VARIANT } from "./tag.enum";

export interface ITagProps extends DetailsHTMLAttributes<HTMLDivElement> {
	children:React.ReactNode,
	varinat: TAG_VARIANT,
	href?:string,
	size: TAG_SIZE
}