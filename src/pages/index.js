import {gql, GraphQLClient} from 'graphql-request';

export const getStaticProps = async () => {
    const url = process.env.ENDPOINT

    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorizaition": process.env.HYGRAPH_TOKEN
        }
    });

    const query = gql`
    query {
        videos {
            id,
            title, 
            description, 
            seen, 
            slug, 
            tags,
            thumbnail {
                url
            }
        }
    }`

    const data = await graphQLClient.request(query)
    const videos = data.videos;

    return {
        props: {
            videos
        }
    }
}


const Home = ({videos}) => {
    console.log(videos)
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Home
