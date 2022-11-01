import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userId = localStorage.getItem('@App:userId')
    const apiToken = localStorage.getItem('@App:apiToken')
    const taskId = localStorage.getItem('@App:taskId')

    
    if(userId && apiToken) {
      setUser({ userId, apiToken })
      
      if(taskId) {
        setUser({
          ...user,
          taskId
        })
      }
    }
  }, [])

  async function Login(userId, apiToken) {
    const res = await fetch('https://habitica.com/api/v3/tasks/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'x-api-key': apiToken,
        'x-api-user': userId
      },
      body: JSON.stringify({
        text: 'Pomodoro 🍅⏱️',
        type: 'habit',
        priority: 2,
        up: true,
        down: false
      })
    })
    
    if(res.status === 201) {
      alert('Success! Task created.')
      const resData = await res.json()
      const createdTaskId = resData.data.id

      console.log(createdTaskId)

      setUser({
        userId,
        apiToken,
        taskId: createdTaskId
      })

      localStorage.setItem('@App:userId', userId)
      localStorage.setItem('@App:apiToken', apiToken)
      localStorage.setItem('@App:taskId', createdTaskId)
      
    } else {
      alert('Something went wrong.')
    }
  }

  async function Logout() {
    setUser(null)
    localStorage.removeItem('@App:userId')
    localStorage.removeItem('@App:apiToken')
    localStorage.removeItem('@App:taskId')
  }

  return (
    <AuthContext.Provider
      value={{
        isSigned: Boolean(user),
        user,
        Login,
        Logout
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
