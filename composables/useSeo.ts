export function useSeo() {
  const registerMeta = (title: string, description: string, imagePath: string = '/meta/android-icon-192x192.png') => {
    useHead({
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/meta/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/meta/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/meta/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/meta/favicon-32x32.png' },
        { rel: 'manifest', href: '/meta/manifest.json' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/meta/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/meta/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/meta/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/meta/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/meta/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/meta/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/meta/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/meta/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/meta/apple-icon-180x180.png' },
      ],
    })

    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogImage: imagePath,
      ogUrl: useRequestURL().origin,
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: imagePath,
      twitterCard: 'summary',
    })
  }

  return {
    registerMeta,
  }
}
