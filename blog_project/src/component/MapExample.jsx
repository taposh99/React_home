const MapExample = () => {
  const city = ["dhaka", "sylhet"];
  return (
    <div>
      <ul>
        {city.map((item, i) => {
          return <li key={i.toString()}> {item}</li>;
        })}
      </ul>
    </div>
  );
};

export default MapExample;
