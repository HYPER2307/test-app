import Link from "next/link";
import { FC } from "react";
import { IBreadCrumbsItem } from "./types";

export const BreadCrumbsItem: FC<IBreadCrumbsItem> = ({ name, path }) => (
  <li className="group truncate text-lg">
    {!path ? (
      <span className="truncate text-lg text-blue-400" title={name}>
        {name}
      </span>
    ) : (
      <div className="flex items-center">
        <Link href={path}>
          <span className="flex items-center truncate">
            <span
              className="truncate text-lg group-hover:text-blue-400"
              title={name}
            >
              {name}
            </span>
          </span>
        </Link>

        <span className="mx-2 flex items-center group-hover:text-blue-400">
          &gt;
        </span>
      </div>
    )}
  </li>
);
