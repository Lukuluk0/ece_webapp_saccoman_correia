import {useRouter} from 'next/router'
import Layout from '/components/Layout'

const Article = () => {
    const router =useRouter();
    const {idArticle} = router.query;
    return <div>
        <Layout>
        Article {idArticle}
        </Layout>
    </div>
};

export default Article;