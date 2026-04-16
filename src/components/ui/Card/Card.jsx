function Card({title, children, action}){

  return(

    <div className="bg-white rounded-[20px] p-[20px] shadow-card">

      <div className="flex justify-between items-center pb-[12px] mb-[16px] border-b border-[#ECECEC]">

        <h3 className="text-[16px] font-semibold">{title}</h3>

        {action && <span className="text-[13px] text-[#111] cursor-pointer">{action}</span>}

      </div>

      <div className="flex flex-col gap-[12px]">

        {children}

      </div>

    </div>

  )

}

export default Card