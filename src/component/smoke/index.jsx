import { useEffect, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./index.css";
const Smoke = () => {
  const text = useRef();
  useEffect(() => {
    text.current.innerHTML = text.current.textContent.replace(
      /\S/g,
      "<span>$&</span>"
    );
    const letters = document.querySelectorAll("span");
    for (let i = 0; i < letters.length; i++) {
      letters[i].addEventListener("mouseover", () => {
        letters[i].classList.add("active");
      });
    }
  }, []);
  return (
    <>
      <Sidebar />
      <div className="text-container">
        <p className="smokeText" style={{ color: "white" }} ref={text}>
          Theo nguồn tin này, người bị bắt tạm giam là Nguyễn Văn Võ, còn người
          được cho tại ngoại vì lý do sức khỏe là Nguyễn Duy Linh. Như Báo Người
          Lao động đã đưa tin, vào lúc 20 giờ 30 ngày 6-9 vụ cháy xảy ra, nguyên
          nhân cháy được xác định là do chập điện.
        </p>
      </div>
    </>
  );
};
export default Smoke;
