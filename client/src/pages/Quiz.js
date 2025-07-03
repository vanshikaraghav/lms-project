import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Quiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/quiz/${id}`).then(res => setQuiz(res.data));
  }, [id]);

  const handleSubmit = async () => {
    const res = await axios.post(`http://localhost:5000/api/quiz/${id}/submit`, { answers });
    alert(`Your Score: ${res.data.score}`);
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Quiz</h2>
      {quiz.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt, idx) => (
            <div key={idx}>
              <label>
                <input type="radio" name={`q${index}`} value={opt} onChange={() => setAnswers({ ...answers, [index]: opt })} />
                {opt}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button className="bg-green-600 text-white px-4 py-2" onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}
