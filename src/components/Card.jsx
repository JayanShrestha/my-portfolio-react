const Card = (props) => {
  return (
    <div
      key={props.id}
      id={props.id}
      className={`gradient-animation p-5 cursor-pointer transition-all hover:scale-105 hover:ring-2 hover:text-color-1 shadow-color-1 ring-color-1 border-none rounded-2xl h-70  m-6`}
    >
      <span
        className="p-2 flex flex-col
 items-center"
      >
        {props.children}
      </span>
    </div>
  );
};

export default Card;
