import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constant';

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //FILTER
  const filteredValue = searchParams.get('status');

  const filter =
    !filteredValue || filteredValue === 'all'
      ? null
      : { field: 'status', value: filteredValue };

  //SORT
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  //PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  //QUERY
  const { isLoading, data, error } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const bookings = data?.data;
  const count = data?.count;

  //CALCULATE PAGE COUNT
  const pageCount = Math.ceil((count || 1) / PAGE_SIZE);

  //PREFETCHING
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return { isLoading, error, bookings, count };
}
