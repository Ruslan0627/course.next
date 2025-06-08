import React, { DetailsHTMLAttributes } from "react";

export interface ILayoutProps extends DetailsHTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}