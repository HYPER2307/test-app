import { FC, memo } from "react";
import { BreadCrumbsItem } from "./BreadCrumbsItem";
import { IBreadCrumbsItem } from "./types";

interface Props {
  className?: string;
  breadCrumbsItems: IBreadCrumbsItem[];
}

export const BreadCrumbs: FC<Props> = memo(
  ({ className, breadCrumbsItems = [] }) => {
    if (!breadCrumbsItems.length) {
      return null;
    }

    return (
      <div className={className}>
        <ul className="flex flex-wrap items-center">
          {breadCrumbsItems.map((breadCrumbsItem) => {
            const isShown = breadCrumbsItem.isShown ?? true;

            return (
              isShown && (
                <BreadCrumbsItem
                  key={crypto.randomUUID()}
                  {...breadCrumbsItem}
                />
              )
            );
          })}
        </ul>
      </div>
    );
  }
);
