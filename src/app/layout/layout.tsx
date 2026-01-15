import { ILayoutProps } from "./layout.props";
import cn from "classnames"
import styles from "./layout.module.css"
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Footer } from "./footer/footer";
import { FunctionComponent, JSX } from "react";
 function Layout({children}:ILayoutProps) {
		return (
				<div className={cn(styles.wrapper)}>
					<Header className={cn(styles.header)}/>
					<Sidebar className={cn(styles.sidebar)}/>
					<div className={cn(styles.body)}>
						{children}
					</div>
					<Footer className={cn(styles.footer)}/>
				</div>
		);
}

export function WithLayout <T extends Record<string, unknown>>(Component: FunctionComponent<T>) {
	return function WithLayoutComponent (props: T):JSX.Element {
		return (
			<Layout>
			<Component {...props}/>
			</Layout>
		)
	}
}
