import PropTypes from 'prop-types';

const SportsByCategory = (props) => {
  const { title, icon } = props;

  SportsByCategory.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
  };
  SportsByCategory.defaultProps = {
    icon: '',
  };

  return (
    <div className="d-flex list-item">
      <p className="mx-4">{title}</p>
      <img src={icon} alt="" className="icon text-end" />
    </div>
  );
};

export default SportsByCategory;
