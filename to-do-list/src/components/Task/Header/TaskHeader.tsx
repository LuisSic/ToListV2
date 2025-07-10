import { auth0 } from "@/lib/auth0";
import { TaskHeaderBody } from "./TaskHeaderBody";

export async function TaskHeader() {
  const session = await auth0.getSession();

  return (
    <header className="task__header">
      <span className="task__header-title">To Do</span>
      <nav className="user-nav">
        <TaskHeaderBody
          name={session?.user.name ?? ""}
          email={session?.user.email ?? ""}
          picture={session?.user.picture ?? ""}
        />
      </nav>
    </header>
  );
}
