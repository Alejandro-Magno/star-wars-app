export default function MultiRender(props) {
  const { repeticiones, Component } = props;

  return (
    <>
      {(function () {
        let persons = [];
        for (let i = 0; i < repeticiones; i++) {
          persons.push(<Component id={i} key={i} />);
        }
        return persons;
      })()}
    </>
  );
}
