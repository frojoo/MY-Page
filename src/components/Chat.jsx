import { useState } from "react";
import axios from "axios";

function Chat() {
  const [question, setQuestion] = useState("오늘의 음악 추천해줘");
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState();

  const onSubmitChat = async (e) => {
    e.preventDefault();

    try {
      if (isLoading) {
        alert("대답이 나온 후에 다시 시도해주세요");
        return;
      }

      if (!question) {
        alert("질문을 입력해주세요");
        return;
      }

      setIsLoading(true);
      setContent("");
      setQuestion("검색 중입니다..");
      const response = await axios.post(
        "https://holy-fire-2749.fly.dev/chat",
        { question },
        { headers: { Authorization: "Bearer BLOCKCHAINSCHOOL3" } }
      );

      if (response.status !== 200) {
        alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
        setIsLoading(false);
        return;
      }

      setContent(response.data.choices[0].message.content);
      setIsLoading(false);
      setQuestion("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto h-28 flex flex-col justify-center items-center">
      <form onSubmit={onSubmitChat}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input type="submit" value="검 색" />
      </form>
      {content && <div>{content}</div>}
    </div>
  );
}

export default Chat;
