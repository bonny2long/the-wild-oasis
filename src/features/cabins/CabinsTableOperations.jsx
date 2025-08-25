import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

export default function CabinsTableOperations() {
  return (
    <div>
      <TableOperations>
        <Filter
          filterField="discount"
          options={[
            { value: 'all', label: 'all' },
            { value: 'no-discount', label: 'No discount' },
            { value: 'with-discount', label: 'With discount' },
          ]}
        />
        <SortBy
          options={[
            { value: 'name-asc', label: 'Sort by name(A-Z' },
            { value: 'name-desc', label: 'Sort by name(Z-A' },
            { value: 'regularPrice-asc', label: 'Sort by price (lowest)' },
            { value: 'regularPrice-desc', label: 'Sort by price (highest)' },
            { value: 'maxCapacity-asc', label: 'Sort by price (lowest)' },
            { value: 'maxCapacity-desc', label: 'Sort by price (highest)' },
          ]}
        />
      </TableOperations>
    </div>
  );
}
