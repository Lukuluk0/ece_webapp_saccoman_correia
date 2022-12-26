import Image from 'next/image'

function Infoarticle({pproject}) {
      return ( 
      <div className="relative px-6">
        <div className="mx-auto max-w-5xl"> 
            <div className="flex justify-center">
              <h1 className="mt-6 md:text-5xl text-2xl font-bold text-center ">
                  {pproject.title}
              </h1>
              </div>
              <div>
              <p className="mt-10 md:text-lg text-base md:leading-8 leading-4 text-gray-600 dark:text-gray-400 text-center">
                {pproject.description}
              </p>
            </div>
            <div className="flex items-center justify-center object-cover mt-6">
            <Image 
              src={pproject.pictures}
              alt="..."
              width={750}
              height={450}/>
              </div>
              </div>
            <div className=" pt-8 px-10 flex grid grid-cols-3  gap-8 justify-items-center ">    
                  <div>
                    <ul className="font-bold md:text-lg text-sm">Features</ul>
                    {pproject.features.map((feature) => (
                       <div key={pproject.id} className="group relative md:text-lg text-sm">
                    <li>{feature}</li>
                    </div>))}
                  </div>
                  <div>
                    <ul className="font-bold md:text-lg text-sm">Skills</ul>
                    {pproject.skills.map((skill) => (
                      <div key={pproject.id} className="group relative md:text-lg text-sm">
                    <li>{skill}</li>
                    </div>))}
                    </div>
                    <div>
                    <ul className="font-bold md:text-lg text-sm">Langauges and Frameworks</ul>
                    {pproject.languages.map((language) => (
                      <div key={pproject.id} className="group relative md:text-lg text-sm">
                    <li>{language}</li>
                    </div>))}
                    </div>
                  </div>
                  </div>
      )
  }

 export default Infoarticle