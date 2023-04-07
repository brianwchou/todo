import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const [count, setCount] = useState(0);
  const listNames = ["thing", "groceries"];
  return (
    <div className="App">
      <Navigation></Navigation>
      <div>
        <div>
          <h1>Todos</h1>
          <p>Get more done</p>
        </div>
        <div></div>
        <div>
          <p>
            Welcome to [App Name] - The Ultimate To-Do List App! Are you tired
            of juggling multiple tasks and struggling to stay organized? Do you
            wish you had a simple and efficient way to manage your to-do list?
            Look no further than [App Name], the perfect solution for all your
            task management needs. With [App Name], you can easily create,
            organize, and prioritize your to-do list in one central location.
            Whether you're planning a big project, running errands, or just
            trying to keep track of your daily tasks, our app makes it easy to
            stay on top of everything. Our intuitive user interface allows you
            to quickly add tasks, set due dates and reminders, and mark items as
            complete with just a few taps. Plus, you can create custom tags to
            help you categorize your tasks and filter your to-do list by
            priority, deadline, and more. But that's not all - [App Name] also
            comes loaded with powerful features designed to help you stay
            productive and focused. From smart suggestions that predict what you
            need to do next, to helpful insights that show you how you're
            spending your time, our app is packed with tools to help you stay on
            top of your game. So what are you waiting for? Try [App Name] today
            and discover the easiest and most effective way to manage your to-do
            list. With our app, you'll never miss a task or deadline again, and
            you'll be amazed at how much more you can accomplish each day.
            Download [App Name] now and start getting things done!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
