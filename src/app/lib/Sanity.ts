import {createClient} from 'next-sanity'
// import imageUrlBuilder form "@sanity/image-url"
export const client = createClient({
    projectId:"y1i1eykg",
    dataset:"production",
    apiVersion:"2023-01-01",
    useCdn:true
})

// const builder = imageUrlBuilder(client)


