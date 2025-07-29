import Image from "next/image";

const topicList = [
  {
    text: "Common Issues",
    svgImage: (
      <Image
        src={"/features/settings-outline.svg"}
        alt="Settings"
        className="topic__icon"
        width={20}
        height={20}
      />
    ),
  },
  {
    text: "Bug Report",
    svgImage: (
      <Image
        src={"/support/bug-outline.svg"}
        alt="Bug"
        className="topic__icon"
        width={20}
        height={20}
      />
    ),
  },
  {
    text: "Purchasing",
    svgImage: (
      <Image
        src={"/support/card-outline.svg"}
        alt="Card"
        className="topic__icon"
        width={20}
        height={20}
      />
    ),
  },
  {
    text: "Using ToDoList",
    svgImage: (
      <Image
        src={"/support/paper-plane-outline.svg"}
        alt="Plane"
        className="topic__icon"
        width={20}
        height={20}
      />
    ),
  },
  {
    text: "Feature Request",
    svgImage: (
      <Image
        src={"/support/bulb-outline.svg"}
        alt="Bulb"
        className="topic__icon"
        width={20}
        height={20}
      />
    ),
  },
  {
    text: "Getting Started",
    svgImage: (
      <Image
        src={"/support/rocket-outline.svg"}
        alt="Rocket"
        className="topic__icon"
        width={20}
        height={20}
      />
    ),
  },
];

const Support = () => {
  const render = topicList.map((topic, index) => {
    return (
      <div className="topic" key={index}>
        {topic.svgImage}
        <h4 className="heading-4">{topic.text}</h4>
        <div className="topic__line"></div>
      </div>
    );
  });

  return (
    <>
      <div className="support">
        <div className="support__main">
          <div className="support__main--text">
            <h1 className="heading-1">Still Lost?</h1>
            <h1 className="heading-1 heading-1-sub">We&apos;re here for you</h1>
            <button className="btn primary--btn">Contact Us</button>
          </div>
          <Image
            src={"/support/question.svg"}
            alt="Question"
            className="support__main--img"
            width={500}
            height={500}
          />
        </div>
        <div className="support__sub">
          <h2 className="heading-2">Help Center</h2>
          <div className="support__sub-line"></div>
          <h3 className="heading-3">What Can We Help You With?</h3>
        </div>
      </div>
      <div className="topics">{render}</div>
    </>
  );
};

export default Support;
