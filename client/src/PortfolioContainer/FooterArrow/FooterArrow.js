import ScrollService from "../../utilities/ScrollService";
import "./FooterArrow.css";
export default function FooterArrow() {
  return (
    <div className="scroll-container">
      <button
        className="bt-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
