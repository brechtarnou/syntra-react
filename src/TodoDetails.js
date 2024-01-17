import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <p>Details</p>
    </>
  );
};

export default TodoDetails;
