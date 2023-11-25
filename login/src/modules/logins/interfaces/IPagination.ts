interface IPagination {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
  hasMore: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  docs: any[];
}

export default IPagination;
