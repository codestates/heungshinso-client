const Filter = (props) => (
  <>
    <div className="filter">
      <span className="ft_ic"></span>
      <span className="ft_list">
        지역
        <span className="ft_arrow_down_ic"></span>
        <div className="ft_resion">
          <ul className="ft_ul" onClick={props.filterItems}>
            <li>서울특별시</li>
            <li>부산광역시</li>
            <li>인천광역시</li>
            <li>대구광역시</li>
            <li>광주광역시</li>
            <li>대전광역시</li>
            <li>울산광역시</li>
            <li>세종시</li>
            <li>경기도</li>
            <li>강원도</li>
            <li>충청북도</li>
            <li>충청남도</li>
            <li>경상북도</li>
            <li>경상남도</li>
            <li>전라북도</li>
            <li>전라남도</li>
            <li>제주도</li>
          </ul>
        </div>
      </span>

      <span className="ft_list">
        직무
        <span className="ft_arrow_down_ic"></span>
        <ul className="ft_ul" onClick={props.filterItems}>
          <li>Planner</li>
          <li>Designer</li>
          <li>Developer</li>
          <li>ETC</li>
        </ul>
      </span>

      <span className="ft_list">
        상태
        <span className="ft_arrow_down_ic"></span>
        <ul className="ft_ul" onClick={props.filterItems}>
          <li>구직중</li>
          <li>구인중</li>
          <li>재직중</li>
          <li>이직희망</li>
          <li>사이드잡희망</li>
        </ul>
      </span>

      {/* { 필터 아이템이 몇 개 이상 되면 오버 레이아웃으로 이동 */}
      <span className={props.ft_items.length > 5 ? null : "ft_items"}>
        {props.ft_items.map(item => (
          <span className="item">{item}</span>
        ))}
      </span>
    </div>
  </>
)

export default Filter