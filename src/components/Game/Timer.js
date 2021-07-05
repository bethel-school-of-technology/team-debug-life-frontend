import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Time() {
  let history = useHistory();
  const redirect = () => {
    history.push('/gameOver')
}
    const [seconds, setSeconds] = React.useState(30);
  
    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        redirect();
      }
    });
  
    return (
      <div className="time">
        <div>
          {seconds}
        </div>
      </div>
    );
  }