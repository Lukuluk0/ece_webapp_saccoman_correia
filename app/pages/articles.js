import Navbar from '../component/Navbar'

const Articles = () => {
    return <div>
        <Navbar />
            <ol>
                <li>Article 1</li><p className="italic font-bold">loremipsum</p>
                <li>Article 2</li><p className="italic font-bold">loremipsum</p>
                <li>Article 3</li><p className="italic font-bold">loremipsum</p>
            </ol>
      
    </div>
}

export default Articles