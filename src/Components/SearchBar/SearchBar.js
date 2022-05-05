export const SearchBar = () => {

  function handleChange(event) {
    const input = event.target.value;
    console.log(input);
    }

  return (
    <input
      onChange={handleChange}
      id="input"
      className="search-planets"
      type="text"
      placeholder="Search Planets..."
    ></input>
  );
};
