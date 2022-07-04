import { MutableRefObject } from 'react';

export default interface UseInfiniteScrollReturnParams {
	loadMoreRef: MutableRefObject<null>;
	month: number;
}
