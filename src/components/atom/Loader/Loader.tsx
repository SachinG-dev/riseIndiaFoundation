interface LoaderProps {
  show: boolean;
}

const Loader = ({ show }: LoaderProps) => {
  return show ? (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : null;
};

export default Loader;
