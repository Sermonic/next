console.log("MY_STEP", process.env.MY_STEP);

export default function Index() {
  return (
    <div>
      <h1>MY_STEP: {process.env.MY_STEP}</h1>
    </div>
  );
}
