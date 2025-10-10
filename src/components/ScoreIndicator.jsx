export default function () {
  const score = 10; // Take from LocalStorage later!

  return (
    <>
      <div className="flex space-x-20 justify-self-center mb-2">
        <p className="self-center">Score: {score}</p>
        <button className="rounded bg-gray-700 py-1 px-4 font-bold">
          Statistics
        </button>
      </div>
    </>
  );
}
