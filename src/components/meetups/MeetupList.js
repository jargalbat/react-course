import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((el) => (
        <MeetupItem
          key={el.id}
          id={el.id}
          image={el.image}
          title={el.title}
          address={el.address}
          description={el.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
