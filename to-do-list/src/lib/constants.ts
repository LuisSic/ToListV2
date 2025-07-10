export const TaskHeaderId = {
  MY_DAY: "myday",
  IMPORTANT: "important",
  PLANNED: "planned",
  ASIGNED_TO_ME: "assigned_to_me",
  INBOX: "inbox",
} as const;

export type TaskHeaderTypes = (typeof TaskHeaderId)[keyof typeof TaskHeaderId];

export type TaskMenuOptions = `/task/${TaskHeaderTypes}`;
