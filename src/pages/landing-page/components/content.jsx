import PropTypes from "prop-types";
import checklist from "@/assets/pictures/checklist.svg";

function Content1({ image, title, content, content1, id }) {
  return (
    <div
      id={id}
      className="w-full flex bg-slate-100 justify-center items-center"
      style={{
        height: "600px",
        padding: "20px",
      }}
    >
      <img src={image} style={{ width:"500px",maxWidth: "50%", marginRight: "50px" }} />

      <div style={{ width:"600px", marginRight:"30px"}}>
        <h1
          className="text-[#293066]"
          style={{
            paddingTop: "20px",
            fontSize: "44px",
            fontFamily: "Helvetica",
            fontWeight: "700",
            lineHeight: "62px",
            textAlign: "left",
            paddingBottom: "16px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "Helvetica",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "0em",
            textAlign: "justify",
            
          }}
        >
          {content}
        </p>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "Helvetica",
            fontWeight: "400",
            lineHeight: "32px",
            letterSpacing: "0em",
            textAlign: "justify",
            paddingTop:"20px"
          }}
        >
          {content1}
        </p>
      </div>
    </div>
  );
}
Content1.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  content1: PropTypes.string.isRequired,
  image: PropTypes.string,
  id:PropTypes.string.isRequired,
};

function Content2({ title, subtitle, points, image, text, id }) {
  return (
    <div
    id={id}
      className="w-full flex justify-center items-center"
      style={{ height: "602px", padding: "20px", }}
    >
      <div style={{ width: "600px" , marginLeft:"30px" }}>
        <h1
          className="text-[#293066]"
          style={{
            fontSize: "44px",
            fontFamily: "Helvetica",
            fontWeight: "700",
            lineHeight: "67.5px",
            letterSpacing: "-1%",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            paddingTop: "16px",
            fontSize: "18px",
            fontFamily: "Helvetica",
            fontWeight: "400",
            lineHeight: "32px",
            textAlign: "justify",
          }}
        >
          {subtitle}
        </p>
        {points.map((point, index) => (
          <div
            className="flex items-center"
            key={index}
            style={{
              paddingTop: "10px",
              paddingBottom: index === points.length - 1 ? "10px" : "0",
            }}
          >
            <img
              src={checklist}
              alt="checklist"
              style={{ paddingRight: "10px" }}
            />
            <span
              className="font-bold"
              style={{
                fontSize: "16px",
                fontFamily: "Helvetica",
                lineHeight: "30px",
                fontWeight: "700",
              }}
            >
              {point}
            </span>
          </div>
        ))}
        <p
          className="flex items-center"
          style={{
            fontSize: "18px",
            fontFamily: "Helvetica",
            fontWeight: "400",
            lineHeight: "32px",
            textAlign: "justify",
          }}
        >
          {text}
        </p>
      </div>
      {image && (
        <img
          src={image}
          alt="pict"
          style={{ width:"500px", maxWidth: "50%", marginLeft: "50px" }}
        />
      )}
    </div>
  );
}

Content2.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export { Content1, Content2 };
