import { useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

interface Message {
  id: string;
  name: string;
  content: string;
  createdAt: any;
}

export default function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  // 🔥 실시간 구독
  useEffect(() => {
    const q = query(
      collection(db, "guestbook"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];

      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  const addMessage = async () => {
    if (!name || !content) return;

    await addDoc(collection(db, "guestbook"), {
      name,
      content,
      createdAt: new Date(),
    });

    setName("");
    setContent("");
  };

  return (
    <div className="guestbook-section">

      <div className="guestbook-title">방 명 록</div>

      <div className="guestbook-form">
        <input
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="축하 메시지를 남겨주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addMessage}>남기기</button>
      </div>

      <div className="guestbook-list">
        {messages.map((msg) => (
          <div key={msg.id} className="guestbook-item">

            <div className="guestbook-header">
              <span className="guestbook-name">{msg.name}</span>
              <span className="guestbook-date">
                {msg.createdAt?.toDate
                  ? msg.createdAt.toDate().toLocaleDateString()
                  : ""}
              </span>
            </div>

            <div className="guestbook-content">
              {msg.content}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
