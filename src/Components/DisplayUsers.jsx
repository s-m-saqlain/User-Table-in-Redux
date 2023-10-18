import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
// import {MdDeleteForever} from "react-icons"
import { useDispatch } from "react-redux";
import { removeUser,setFilter} from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    return state.users.data;
  });
  const filter = useSelector((state) => {
    return state.users.filter;
  });

  const filteredUsers = users.filter((user, id) => user.includes(filter));
  // const filter = useSelector((state) => state.users.filter);
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <Wrapper>
       <input
        type="text"
        placeholder="Filter users"
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
      {filteredUsers.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button
              className="btn btn-delete"
              onClick={() => deleteUser(id)}
            ></button>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;
