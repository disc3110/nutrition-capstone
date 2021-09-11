import Groups from '../components/Groups/Groups';
import FilterByName from '../components/FilterByName';

const Home = () => (
  <div>
    <p className="text-center mb-0 mt-1">Select the first letter of the category you are lookinf for </p>
    <div className="d-flex justify-content-evenly mb-2">
      <FilterByName />
    </div>
    <Groups />
  </div>
);

export default Home;
