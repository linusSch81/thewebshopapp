/**
 * "...The debounce function forces a function to wait a certain amount
 * of time before running again. The function is built to limit the
 * number of times a function is called ... Events such as scrolling,
 * mouse movement, and keypress bring great overhead with them if they
 * are captured every single time they fire..."
 *
 * JS setTimeout & clearTimeout
 * - https://www.w3schools.com/jsref/met_win_cleartimeout.asp
 */
import { useState, useEffect } from "react";
export const useDebounce = (value: any, delay?: number) => {
	const [debounceValue, setDebounceValue] = useState(value);
	useEffect(() => {
		const debounceDelay = delay ? delay : 500;
		//const debounceDelay = 500;
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, debounceDelay);

		return () => {
			clearTimeout(handler);
		};
		// eslint-disable-next-line
	}, [value]);

	return debounceValue;
};
