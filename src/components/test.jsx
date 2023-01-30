const AppA = () => {
  return <div>hello</div>;
};
const AppB = () => {
  return <div>hello</div>;
};

const AppC = () => {
  return (
    <>
      <AppA />
      <AppB />
    </>
  );
};
