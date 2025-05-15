import { ITagProps } from "./tag.type";
import cn from "classnames";
import styles from "./tag.module.css";
import { TAG_SIZE, TAG_VARIANT } from "./tag.enum";

function Tag({ children, varinat, href, className,size,...props }: ITagProps) {
	return (
		<div
			className={cn(styles.tag,className ?? "", {
				[styles.s]:size === TAG_SIZE.S,
				[styles.m]:size === TAG_SIZE.M,
				[styles.green]: varinat === TAG_VARIANT.GREEN,
				[styles.gray]: varinat === TAG_VARIANT.GRAY,
				[styles.red]: varinat === TAG_VARIANT.RED,
				[styles.transparent]: varinat === TAG_VARIANT.TRANSPARENT,
				[styles.primary]: varinat === TAG_VARIANT.PRIMARY,
			})}
			{...props }
		>
			{ href? <a href={href} target="blank">{children}</a>: children } 
		</div>
	);
}

export default Tag;
