// Let's import the styles from '../../styles/css/header.list.css;
import './header.list.css';

const HeaderList = () => {
  return (
    <thead className="t-header-list">
        <tr className='t-header-row-1'>
            <th>title</th>
            <th>description</th>
            <th>priority</th>
            <th>completed</th>
            <th>level</th>
            <th>time</th>
            <th colSpan={2}></th>
        </tr>
    </thead>
  );
};

export default HeaderList;
