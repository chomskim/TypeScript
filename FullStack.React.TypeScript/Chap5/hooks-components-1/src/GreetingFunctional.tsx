import React from 'react'

interface GreetingProps {
  enteredName: string
  message: string
  greetingDispatcher: React.Dispatch<{ type: string; payload: string }>
}

export default function Greeting({ message, enteredName, greetingDispatcher }: GreetingProps) {
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    greetingDispatcher({ type: 'enteredName', payload: e.target.value })
    greetingDispatcher({ type: 'message', payload: e.target.value })
  }

  return (
    <div>
      <input value={enteredName} onChange={onChangeName} />
      <div>{message}</div>
    </div>
  )
}
