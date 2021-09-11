/* eslint-disable no-unused-vars */
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
  const filter = useSelector((state) => state.toFilter.toFilter);
  const filteredGropus = groups.filter((group) => group.attributes.name[0] === filter);
  const displayableGroups = filter ? filteredGropus : groups;

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
    <div className="d-flex flex-wrap group-container">{renderGroups(displayableGroups)}</div>
  );
};

export default Groups;
