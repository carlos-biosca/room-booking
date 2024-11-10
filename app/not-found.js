const NotFound = () => {
  return (
    <div className='w-[80%] h-[50vh] flex flex-col justify-center items-center mx-auto space-y-2'>
      <h1 className='text-xl md:text-3xl'>404 - Page Not Found</h1>
      <p className='text-center'>We couldn't find the page you were looking for.</p>
      <a href="/" className='underline cursor-pointer'>
        Return to Home
      </a>
    </div>
  );
}

export default NotFound