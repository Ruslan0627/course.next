import { IFooterProps } from "./footer.props";
import cn from "classnames"
import styles from "./footer.module.css"
import { format } from "date-fns"
export function Footer({className, ...props}:IFooterProps) {
		return (
			<footer 
			className={cn(className ?? "", styles.footer)}
			{...props}>
				<div>IBRAIN © 2023 - {format(new Date(),"yyyy")} Все права защищены</div>
				<div>Пользовательское соглашение</div>
				<div>Политика конфиденциальности</div>
			</footer>
		);
}

