import Link from "next/link"
import Image from 'next/image'
  
  export default function Example({pprojects}) {
    console.log(pprojects)
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl  lg:max-w-none ">
            <h2 className="text-2xl font-bold text-gray-900 text-center">List of our projects</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 md:gap-12 md:space-y-0">
              {pprojects.map((project) => (
                <div key={project.id} className="group relative">
                   <Link href={`/projects/${project.id}`}>
                  <div className= " h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 relative object-fit-contain">
                    <Image
                      src={project.pictures}
                      layout='fill'
                      alt="...."
                    />
                  </div>
                  </Link>
                  <h3 className="mt-6 text-sm text-gray-500">
                      {project.title}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
  }
  