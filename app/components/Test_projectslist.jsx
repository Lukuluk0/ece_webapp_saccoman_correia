import Link from "next/link"
  
  export default function Example({pprojects}) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl  lg:max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 md:gap-6 md:space-y-0">
              {pprojects.map((project) => (
                <div key={project.id} className="group relative">
                  <div className=" h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 ">
                    <img
                      src={project.pictures[1]}
                      className="h-full w-full object-cover "
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                      <Link href={`/projects/${project.id}`}>
                      {project.title}
                      </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
  }
  