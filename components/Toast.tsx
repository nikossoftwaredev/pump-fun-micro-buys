import { FaCheck } from "react-icons/fa";

const Toast = ({ title }: { title: string }) => (
  <div className="toast z-50">
    <div className="alert alert-success">
      <FaCheck />
      <span>{title}</span>
    </div>
  </div>
);

export default Toast;
