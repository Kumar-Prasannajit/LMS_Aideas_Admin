function EnrolledBy() {

  const users = Array(7).fill({
    name: "yashwanth",
    email: "maraganiyash@gmail.com"
  })

  return (
    <div>
      <table className="w-full border-collapse mb-[16px] [&_th]:border [&_th]:border-[#e5e7eb] [&_th]:p-[12px] [&_th]:text-left [&_th]:bg-[#f9fafb] [&_th]:font-semibold [&_td]:border [&_td]:border-[#e5e7eb] [&_td]:p-[12px] [&_td]:text-left">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th className="!text-center">Unenroll</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td className={i === 0 ? "text-[#155DFC] font-medium" : ""}>{user.name}</td>
              <td className={i === 0 ? "text-[#155DFC] font-medium" : ""}>{user.email}</td>
              <td className="text-red-500 text-center cursor-pointer">✖</td>
            </tr>
          ))}
        </tbody>

      </table>

      
      <div className="flex gap-[6px] mb-[20px]">
        <button className="border border-[#ddd] px-[8px] py-[4px] bg-white cursor-pointer">{"<"}</button>
        {[1,2,3,4,5,6].map(n => <button key={n} className="border border-[#ddd] px-[8px] py-[4px] bg-white cursor-pointer">{n}</button>)}
        <button className="border border-[#ddd] px-[8px] py-[4px] bg-white cursor-pointer">{">"}</button>
      </div>

      
      <div>

        <label className="font-semibold">Email*</label>
        <p className="text-[12px] text-[#777] mt-[6px] mb-[10px]">
          Enter emails of learners to enroll in this course (comma separated)
        </p>

        <textarea
          className="w-full h-[120px] border border-[#ddd] rounded-[10px] p-[12px] resize-none"
          placeholder="learner1@example.com, learner2@example.com"
        />

        <div className="flex justify-end mt-[12px]">
          <button className="bg-[#155DFC] text-white border-none px-[16px] py-[8px] rounded-[8px] cursor-pointer">DONE</button>
        </div>

      </div>

    </div>
  )
}

export default EnrolledBy