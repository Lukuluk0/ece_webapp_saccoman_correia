import Layout from '../components/Layout'

const Articles = () => {
    return <div>
        <Layout>
            <ol>
                <li>Article 1</li><p className="italic font-bold">loremipsum</p>
                <li>Article 2</li><p className="italic font-bold">loremipsum</p>
                <li>Article 3</li><p className="italic font-bold">loremipsum</p>
            </ol>
            </Layout>
    </div>
}

export default Articles