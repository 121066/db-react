import "./index.css";
function CardItem() {
  return (
    <>
      <div className="card_item">
        <div className="card_item_scuess"></div>
      </div>
    </>
  );
}
function CardList() {
  const list = [1, 2, 3, 4, 4, 11, 56, 7, 8, 9, 0, 1];
  return (
    <>
      <div className="card_">
        {list.map((item, index) => {
          return <CardItem key={index}></CardItem>;
        })}
      </div>
    </>
  );
}
export default CardList;
