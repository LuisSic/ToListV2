export const TaskHeaderId = {
  MY_DAY: "myday",
  IMPORTANT: "important",
  PLANNED: "planned",
  ASIGNED_TO_ME: "assigned_to_me",
  INBOX: "inbox",
} as const;

export type TaskHeaderTypes = (typeof TaskHeaderId)[keyof typeof TaskHeaderId];

export const TaskHeaderTitles: Record<TaskHeaderTypes, string> = {
  myday: "My Day",
  important: "Important",
  planned: "Planned",
  assigned_to_me: "Assigned to Me",
  inbox: "Task",
} as const;

export const TASK_API =
  "https://3i1ivncr4c.execute-api.us-east-2.amazonaws.com/dev";

export type TaskMenuOptions = `/task/${TaskHeaderTypes}`;
