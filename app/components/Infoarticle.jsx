import Image from 'next/image'

function Infoarticle({pproject}) {
      return ( 
      <div className="relative px-6">
        <div className="mx-auto max-w-4xl"> 
            <div className="flex justify-center">
              <h1 className="mt-6 text-5xl font-bold text-center ">
                  {pproject.title}
              </h1>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                {pproject.description}
              </p>
            </div>
            <div className=" pt-6 px-10 flex grid grid-rows-3 grid-flow-col gap-4 justify-between">
            <div class="row-span-3">
              <Image 
              src={pproject.pictures}
              alt="..."
              width={500}
              height={250}/>
            </div>
            <div className="row-span-2 col-span-2">
              <div className="grid grid-cols-2 gap-4">
                  <div>
                    <ul>Features</ul>
                    {pproject.features.map((feature) => (
                       <div key={pproject.id} className="group relative">
                    <li>{feature}</li>
                    </div>))}
                  </div>
                  <div>
                    <ul>Skills</ul>
                    {pproject.skills.map((skill) => (
                      <div key={pproject.id} className="group relative">
                    <li>{skill}</li>
                    </div>))}
                  </div>
              </div>
            </div>
            <div className="col-span-2">{pproject.languages}</div>
            </div>
            
          </div>
      )
  }

 export default Infoarticle