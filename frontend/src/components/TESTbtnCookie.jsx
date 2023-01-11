import React from "react";

import { useCookies } from "react-cookie";

const TESTbtnCookie = () => {
	//const [cookies, setCookie, removeCookie] = useCookies(["ajt"]);

	const [cookies, setCookie, removeCookie] = useCookies([
		"ajt",
		"AccType",
		"accID",
		"name",
		"email",
	]);

	function onClickSETBTN() {
		setCookie("ajt", "Widou", { path: "/" });
	}

	function onClickDELBTN() {
		removeCookie("ajt");
	}

	function onClickGETBTN() {
		console.log(cookies.ajt);
	}

	//all

	function onClickSetAll() {
		setCookie("ajt", "Eyasdasdasdsa1230411", { path: "/" });
		setCookie("AccType", "user", { path: "/" });
		setCookie("accID", "1", { path: "/" });
		setCookie("name", "Gidou", { path: "/" });
		setCookie("email", "guido@gmail.com", { path: "/" });
	}

	function onClickDELAll() {
		removeCookie("ajt");
		removeCookie("AccType");
		removeCookie("accID");
		removeCookie("name");
		removeCookie("email");
	}

	//store model:
	function onClickSetAllS() {
		setCookie("ajt", "Eyasdasdasdsa1230411", { path: "/" });
		setCookie("AccType", "user", { path: "/" });
		setCookie("accID", "1", { path: "/" });
		setCookie("name", "Gidou", { path: "/" });
		setCookie("email", "guido@gmail.com", { path: "/" });
	}

	function onClickDELAllS() {
		removeCookie("ajt");
		removeCookie("AccType");
		removeCookie("accID");
		removeCookie("name");
		removeCookie("email");
	}

	return (
		<div>
			<button onClick={onClickSETBTN}>SET ajt</button>
			<button onClick={onClickGETBTN}>GET by name ajt</button>
			<button onClick={onClickDELBTN}>DELETE ajt</button>
			<br />
			<button onClick={onClickSetAll}>Set ALL user</button>
			<button onClick={onClickDELAll}>DELETE all</button>
			<br />
			<button onClick={onClickSetAllS}>Set ALL store</button>
			<button onClick={onClickDELAllS}>DELETE all</button>
		</div>
	);
};

export default TESTbtnCookie;

// import React from "react";

// import { useCookies } from "react-cookie";

// const TESTbtnCookie = () => {
// 	const [cookies, setCookie, removeCookie] = useCookies([
// 		"userName",
// 		"userEmail",
// 		"jwt",
// 	]);

// 	function onClickBTN() {
// 		setCookie("userName", "widoesas", { path: "/" });
// 		setCookie("userEmail", "g@g.com", { path: "/" });
// 	}

// 	function onClickBTN2() {
// 		setCookie("userName", "pepzxs", { path: "/" });
// 		setCookie("userEmail", "gsadas@gxzx.com", { path: "/" });
// 	}

// 	function onClickBTNDEL() {
// 		removeCookie("userName", { path: "/" });
// 		removeCookie("userEmail", { path: "/" });
// 	}
// 	function onClickBTNconsole() {
// 		console.log(cookies);
// 	}
// 	function onClickBTNconsoles() {
// 		console.log(cookies.userName);
// 		console.log(cookies.userEmail);
// 	}

// 	return (
// 		<div>
// 			<button onClick={onClickBTN}>PRUEBA set cookie 1</button>
// 			<button onClick={onClickBTN2}>PRUEBA set cookie 2</button>
// 			<button onClick={onClickBTNDEL}>PRUEBA borrar cookies</button>
// 			<button onClick={onClickBTNconsole}>Get all cookies</button>
// 			<button onClick={onClickBTNconsoles}>Get one cookies</button>
// 		</div>
// 	);
// };

// export default TESTbtnCookie;
