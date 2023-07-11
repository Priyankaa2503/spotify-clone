import GreetingCard from "./GreetingCard";
import { greetingData } from "../data/data";
const Greeting = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="w-full px-10 py-5 mt-5">
      <div className="text-5xl font-bold tracking-wide">{greeting}</div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-5">
        {greetingData.map((data) => (
          <GreetingCard key={data.id} image={data.image} name={data.name} />
        ))}
      </div>
    </div>
  );
};

export default Greeting;
