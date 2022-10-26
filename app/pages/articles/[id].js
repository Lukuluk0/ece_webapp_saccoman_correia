import {useRouter} from 'next/router'
import Navbar from '/component/Navbar'

const Article = () => {
    const router =useRouter();
    const {idArticle} = router.query;
    return <div>
        <Navbar />
        Article {idArticle}
    </div>
};

export default Article;