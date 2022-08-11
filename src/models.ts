import React from "react";

export type Nullable<T> = T | null;
export interface ChildrenOnly {
    children: React.ReactNode;
}
