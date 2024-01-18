import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function useSocket() {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const s = io(import.meta.env.VITE_SERVER_IP);
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  return { socket };
}

export default useSocket;
