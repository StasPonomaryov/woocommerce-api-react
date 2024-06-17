type TSearchProps = {
  query: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search(props: TSearchProps) {
  const { query, onChange } = props;

  return (
    <div>
      <input
        className="input-text"
        onChange={onChange}
        type="text"
        placeholder="Почніть вводити назву товару..."
        value={query}
      />
    </div>
  )
}

export default Search;
