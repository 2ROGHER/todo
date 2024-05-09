import "./searchbar.css";

export default function Searchbar() {
  return (
    <form className="searchbar">
      <input  id="search" type="text" placeholder="Search" name="search" value="search" />
    </form>
  )
}
