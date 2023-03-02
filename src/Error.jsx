import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()
  console.log({ error })

  return (
    <div className='mt-[20%] text-center'>
      <h1 className='text-xl font-extrabold text-darkish'>🙀 Oh no!</h1>
      <p className='mt-8'>Something terribly wrong happened. We cannot display this page.</p>
      <p className='mt-4 text-gunmetal'><i>Here's what we know: {error.statusText || error.message}</i></p>
    </div>
  )
}