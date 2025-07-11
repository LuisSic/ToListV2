import { auth0 } from "@/lib/auth0";
import Menu from "@/components/Task/Menu/Menu";
import { TASK_API, TaskHeaderTitles, TaskHeaderTypes } from "@/lib/constants";
import { Todo } from "@/lib/todo.interfaces";

const dateNow = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(new Date());

export default async function Home({
  params,
}: {
  params: Promise<{ section: TaskHeaderTypes }>;
}) {
  const { section } = await params;
  const session = await auth0.getSession();

  const response = await fetch(`${TASK_API}/tasks`, {
    headers: {
      Authorization: session?.tokenSet.idToken ?? "",
    },
  });
  const todos: Todo[] = await response.json();

  return (
    <div className="task__main">
      <Menu items={todos} />
      <div className="taskList">
        <div className="taskList-header">
          <h2 className="heading-4">{TaskHeaderTitles[section]}</h2>
          {section === "myday" ? (
            <span className="todayNow">{dateNow}</span>
          ) : null}
        </div>

        <div className="backgroundLines"></div>
      </div>
    </div>
  );
}
