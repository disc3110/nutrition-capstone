import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../../Redux/Sports/groups';
import { fetchSports } from '../../Redux/Sports/sportsList';
import Group from './Group';
import '../../style/groups.css';

const Groups = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.entities);
  const sports = useSelector((state) => state.sports.entities);

  useEffect(() => {
    if (groups.length === 0) {
      dispatch(fetchGroups());
    }
    if (sports.length === 0) {
      dispatch(fetchSports());
    }
  });

  const renderGroups = (groupCollection) => groupCollection.map((groupInfo) => (
    <Group
      key={groupInfo.id}
      name={groupInfo.attributes.name}
      number={groupInfo.relationships.sports.data.length}
      slug={groupInfo.attributes.slug}
    />
  ));

  return (
    <div className="d-flex flex-wrap group-container">{renderGroups(groups)}</div>
  );
};

export default Groups;
