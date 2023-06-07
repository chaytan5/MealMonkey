import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();
	console.log(err);
	return (
		<div className="error">
			<h1>Oops</h1>
			<h2>Some error occurred</h2>
			<h3>{err.status + " : " + err.statusText}</h3>
		</div>
	);
};

export default Error;
