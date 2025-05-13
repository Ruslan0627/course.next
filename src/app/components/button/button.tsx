import { IButtonProps } from "./button.type";
import styles from "./button.module.css";
import cn from "classnames";
import { ARROW_BUTTON_VARIANT, BUTTON_VARIANT } from "./button.enum";
import ArrowIcon from "./arrow.svg"

export function Button({ children, variant, className, arrow , ...props }: IButtonProps) {
	return (
		<button
		className={cn(styles.btn, className ?? "", {
			[styles.primary]: variant === BUTTON_VARIANT.PRIMARY,
			[styles.transparent]: variant === BUTTON_VARIANT.TRANSPARENT,
		})}
		{...props}
		>
			{children}
			{arrow && (
			<span className={(cn(styles.arrow, {
				[styles.down]: arrow === ARROW_BUTTON_VARIANT.DOWN,
				[styles.right]: arrow === ARROW_BUTTON_VARIANT.RIGHT,
			}))}>
				<ArrowIcon/>
			</span>
		)}
		</button>
	);
}
