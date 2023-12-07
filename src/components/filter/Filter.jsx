import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { FilterContainer, FilterInput } from './Filter.styled';
import { TbSearch } from 'react-icons/tb';
import { getFilter } from '../../redux/myContacts/contactsSelectors';
import { filterSlice } from '../../redux/myContacts/contactsSlice';
const filterId = nanoid();

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterContainer>
      <label>
        {' '}
        Find contacts by name <TbSearch />
      </label>

      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={e =>
          dispatch(filterSlice.actions.changeFilter(e.target.value))
        }
        id={filterId}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
