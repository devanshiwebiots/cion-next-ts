import { CardBody, Table } from "reactstrap";
import { Link2, MoreHorizontal, Trash2 } from "react-feather";
import { Href } from "@/utils/Constant";
import SweetAlert from "sweetalert2";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAllTasks } from "@/Redux/Reducer/TasksSlice";
import Link from "next/link";

const CreatedByme = () => {
  const { allTasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const deleteTask = (userId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        const updatedTask = allTasks.filter((data) => data.id !== userId);
        dispatch(setAllTasks(updatedTask));
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };
  return (
    <CardBody className='p-0'>
      <div className='taskadd'>
        <div className='table-responsive table-borderless'>
          <Table>
            <tbody>
              {allTasks.map((data) => (
                <tr key={data.id}>
                  <td>
                    <h3 className='task_title_0'>{data.title}</h3>
                    <p className='project_name_0'>{data.collection}</p>
                  </td>
                  <td>
                    <p className='task_desc_0'>{data.description}</p>
                  </td>
                  <td>
                    <a className='me-2' href={Href}>
                      <Link2 />
                    </a>
                    <a href={Href}>
                      <MoreHorizontal />
                    </a>
                  </td>
                  <td>
                    <Link href={Href} onClick={() => deleteTask(data.id)}>
                      <Trash2 />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </CardBody>
  );
};

export default CreatedByme;
