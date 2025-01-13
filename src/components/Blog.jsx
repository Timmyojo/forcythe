import { article } from "../utils/data"
import Button from "./Button"

function Blog() {

  return (
    <div className='w-full px-5 lg:px-8 xl:px-[8%] pb-10 scroll-mt-20'>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h2 className='text-[32px] text-[700] sm:text-[24px] leading-[40px] lg:text-[44px] lg:leading-[48px] mb-12 max-w-[90%]'>Read our articles, news and product blog</h2>
      <div className='w-32'>
        <Button icon='true'/>
        </div>
      </div>
      <div className="grid gap-10 grid-cols-auto mx-auto mt-20 mb-10">
        {article.map((blog, idx) => (
          <div key={idx} className='flex flex-col gap-10'>
              <a href={blog.slug} className='relative group'>
              <div>
                <img src={blog.img} className="object-contain rounded-[20px] group-hover:scale-[0.9] duration-500" alt={blog.title} />
              </div>
              <div className='border-l-[1px] mt-6 px-4 py-1 border-white group-hover:translate-x-4 duration-500'>
              <h2 className="font-bold text-lg">Blog</h2>
                <div className='flex flex-col gap-2'>
                  <div className="capitalize mt-2 mb-4 text-[17px] text-gray-300 flex items-center gap-2">{blog.author}
                    <div className="w-2 h-2 rounded-full bg-white border border-white"></div> <span>{blog.date}</span></div>
                  <p className='text-2xl font-bold'>{blog.title}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
