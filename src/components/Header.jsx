import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';
import * as Label from '@radix-ui/react-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export function Header() {
  const [userCredentials, setUserCredentials] = useState({
    userId: '',
    apiToken: '',
  })

  function handleInput(e) {
    setUserCredentials({
      ...userCredentials,
      [e.target.id]: e.target.value
    }) 
  }
  
  async function handleFormSubmit(e) {
    e.preventDefault()

    const res = await fetch('https://habitica.com/api/v3/tasks/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'x-api-key': userCredentials.apiToken,
        'x-api-user': userCredentials.userId
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
    } else {
      alert('Something went wrong.')
    }
  }

  return (
    <>
      <header className="w-full flex justify-end p-4">

        <Dialog.Root>
          <Dialog.Trigger className="px-4 h-10 inline-block rounded-md my-2 bg-indigo-500 text-white text-sm border hover:opacity-95 active:scale-105" >
            Login
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="w-full absolute top-0 bottom-0 bg-black opacity-70" />
            <Dialog.Content className="w-full h-full absolute top-0 flex justify-center items-start pt-16 px-4">
              <form onSubmit={handleFormSubmit} className="max-w-lg bg-indigo-50 rounded-lg p-4">
                <div>
                  <div className="mb-2 relative">
                    <Dialog.Title className="text-2xl font-medium">
                      Integrate with Habitica
                    </Dialog.Title>
                    <Dialog.Close className="absolute top-0 right-0">
                      <FontAwesomeIcon className="text-red-700" size="1x" icon={faXmark} />
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="text-sm">
                      Provide the info below and we will create a task named "Pomodoro 🍅⏱️" in your habits (you can edit later). After that, every time you complete a pomodoro it'll be scored automatically for you.
                  </Dialog.Description>
                </div>

                <div className="my-4">
                  <Label.Root className=" mb-2 text-sm font-medium block" htmlFor="userId">User ID (Settings -> API)</Label.Root>
                  <input 
                    className="w-full p-2 border border-indigo-500 rounded bg-white text-sm"
                    type="text"
                    id="userId"
                    placeholder="Paste your User ID" 
                    onInput={handleInput}
                  />
                </div>

                <div className="my-4">
                  <Label.Root className=" mb-2 text-sm font-medium block" htmlFor="apiToken">API Token (Settings -> API -> Show API Token)</Label.Root>
                  <input 
                    className="w-full p-2 border border-indigo-500 rounded bg-white text-sm"
                    type="password"
                    id="apiToken"
                    placeholder="Paste your API Token"
                    onInput={handleInput}
                  />
                </div>

                <div className="my-4 flex justify-between items-center">
                  <Button>
                    Create Habit
                  </Button>

                  <small className="w-1/2 text-center">We don't store any of your data (your credentials will stay within your browser only).</small>
                </div>

              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
    
        {/* <button className="w-9 h-9 flex justify-center items-center bg-indigo-500 text-white rounded-full hover:opacity-95">
          <FontAwesomeIcon size="1x" icon={faUser} />
        </button> */}
      </header>
    </>
  )
}