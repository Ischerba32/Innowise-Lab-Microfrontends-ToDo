import { Moment } from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { getDays } from '../helpers/calendar';
import UseMonthParams from '../interfaces/hooks/useMonth.interface';

export const useMonth = (month: number): UseMonthParams => {
	const [days, setDays] = useState<Moment[]>([]);

	const getNextMonthDays = useCallback(() => {
		const calendar = getDays(month);
		setDays(calendar);
	}, [month]);

	useEffect(() => {
		getNextMonthDays();
	}, [month, getNextMonthDays]);

	return { days };
};
