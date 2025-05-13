import { H_TAG_VARIANT } from "./Htag.enum";
import { IHTagProps } from "./Htag.type";
import styles from "./Htag.module.css"
import cn from "classnames"

export function Htag({ tag, children }:IHTagProps) {
	switch (tag) {
		case H_TAG_VARIANT.H1: return <h1 className={cn(styles.h1)}>{ children }</h1> 
		case H_TAG_VARIANT.H2: return <h2 className={cn(styles.h2)}>{ children }</h2> 
		case H_TAG_VARIANT.H3: return <h3 className={cn(styles.h3)}>{ children }</h3> 
		case H_TAG_VARIANT.H4: return <h4 className={cn(styles.h4)}>{ children }</h4> 
		default: return <></>
	}
}
