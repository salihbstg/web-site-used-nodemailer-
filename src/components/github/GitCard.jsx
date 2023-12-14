const GitCard = ({name,url}) => {
  return (
    <div className='bg-[#112afb] p-1 h-32 w-32 rounded-3xl flex justify-center shadow-2xl shadow-black items-center cursor-pointer'>
        <a className="text-white" target="_blank" href={url}>{name}</a>
    </div>
  )
}

export default GitCard
