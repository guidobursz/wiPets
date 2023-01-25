export const dateConverter = (dateStringFromDB) => {
	//first create date type in js from the string:
	let bdDate = new Date(dateStringFromDB);

	//Create each data:
	let bdDay = bdDate.getDate();
	let bdMonth = bdDate.getMonth() + 1; // getMonth() returns 0-based index, so adding 1 to get actual month
	let bdYear = bdDate.getFullYear();

	//create a string -> d - m - y
	let argDateType = `${bdDay}-${bdMonth}-${bdYear}`;

	//Create empty array and pushes:
	let datesArray = [];
	datesArray.push(bdDay, bdMonth, bdYear, argDateType, dateStringFromDB);

	return datesArray;
};
