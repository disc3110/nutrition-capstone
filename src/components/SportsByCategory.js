const SportsByCategory =  (props) => {
  const { title, icon } = props;

  return (
    <div className="d-flex list-item" >
      <p className="mx-4">{title}</p>
      <img src={icon} alt="" className="icon text-end" />
    </div>
  );
}

export default SportsByCategory