import { auth0 } from "@/lib/auth0";
import Menu from "@/components/Task/Menu/Menu";

import { fetchTodos } from "@/lib/task";

export default async function IndexMenu() {
  const session = await auth0.getSession();

  const response = await fetchTodos({
    token: session?.tokenSet.idToken || "",
  });

  if (response.type === "error") {
    console.error("Error fetching todos:", response.error);
    return <div>Error loading tasks</div>;
  }
  const todos = response.data;

  return <Menu items={todos} />;
}
