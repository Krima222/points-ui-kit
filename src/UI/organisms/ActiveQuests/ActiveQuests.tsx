import { ISubquestGroup } from '@/common/types';
import { SubquestState } from '@/components/UI/atoms/SubquestState';
import { Subquest } from '@/components/UI/molecules/Subquest';
import { Task } from '@/components/UI/molecules/Task';

import classes from './ActiveQuests.module.scss';

type IProps = {
  data: ISubquestGroup;
};

const subquest = (data: ISubquestGroup) =>
  data.subquests.map((item) => (
    <div key={item.id} className={classes.subquests}>
      <Subquest
        title={item.description}
        state={<SubquestState type="unavailable" />}
        onClick={() => console.log(`Subquest clicked: ${item.id}`)}
      />
      <div className={classes.subquests}>
        {item.tasks?.map((task) =>
          task.status ? (
            <Task
              key={task.id}
              title={task.description}
              status={task.status}
              onClick={() => console.log(`Task clicked: ${task.id}`)}
            />
          ) : null,
        )}
      </div>
    </div>
  ));

export function ActiveQuests({ data }: IProps) {
  return <div className={classes.subquests}>{subquest(data)}</div>;
}
