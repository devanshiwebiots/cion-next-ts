import { FileListPropsType } from "@/Types/Apps/FileManager";
import { File } from "@/utils/Constant";

const Files: React.FC<FileListPropsType> = ({ myFile }) => {
  return (
    <>
      <h5 className='mt-4'>{File} </h5>
      <ul className='files-content mt-2'>
        {myFile.map((data, i) => (
          <li key={i} className='folder-box d-flex align-items-center'>
            <div className='d-flex align-items-center files-list'>
              <div className='flex-shrink-0 file-left'>
                <i className={data.icon}></i>
              </div>
              <div className='flex-grow-1 ms-3'>
                <h6>{data.name}</h6>
                <p className='mb-1'>
                  {data.modify}
                  {data.size}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Files;
