import { WithLayout } from "@/app/layout/layout";

function Course(params) {
		return (
				<div>
					<h2>Course{JSON.stringify(params)}</h2>
				</div>
		);
}

export default WithLayout(Course);