
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.gappii.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.gappii.com/community',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ]
}