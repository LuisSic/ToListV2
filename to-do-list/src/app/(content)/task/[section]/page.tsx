import { auth0 } from "@/lib/auth0";

import { TaskHeaderTitles, TaskHeaderTypes } from "@/lib/constants";

import TaskBody from "@/components/Task/TaskBody";
import { Suspense } from "react";

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

  return (
    <>
      <div className="taskList">
        <div className="taskList-header">
          <h2 className="heading-4">{TaskHeaderTitles[section]}</h2>
          {section === "myday" ? (
            <span className="todayNow">{dateNow}</span>
          ) : null}
        </div>
        <Suspense fallback={<div>Loading tasks suspense...</div>}>
          <TaskBody token={session?.tokenSet.idToken ?? ""} section={section} />
        </Suspense>
        <div className="backgroundLines"></div>
      </div>
    </>
  );
}
