import React from 'react';


import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md"; // unliked
import { IoMdArchive } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiTask } from "react-icons/si";
import { CgGoogleTasks } from "react-icons/cg";
// Import styles sheets for this componet
import './filterbar.css';
import FilterContainer from '../../components/container/FilterContainer';



const FilterBar = () => {
    return (
      <nav className="t-filterbar-container">
        <ul>
          <FilterContainer
            filter="ALL"
            text="task"
            color="#b5fbfe"
            icon={<SiTask />}
          ></FilterContainer>

          <FilterContainer
            filter="COMPLETED"
            text="completed"
            color="#b2feb4"
            icon={<CgGoogleTasks />}
          ></FilterContainer>

          <FilterContainer
            filter="FAVORITES"
            text="favorites"
            color="#ffbebe"
            icon={<MdFavorite />}
          ></FilterContainer>

          <FilterContainer
            filter="ARCHIVED"
            text="archived"
            color="#ffdaa6"
            icon={<IoMdArchive />}
          ></FilterContainer>

          <FilterContainer
            filter="TRASH"
            text="Trashcan"
            color="#f64b4b"
            icon={<RiDeleteBin6Line />}
          ></FilterContainer>
        </ul>
      </nav>
    );
}

export default FilterBar;
